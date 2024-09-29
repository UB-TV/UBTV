<?php

namespace App\Http\Controllers;

use Google\Client;
use Inertia\Inertia;
use App\Models\Video;
use Inertia\Response;
use App\Models\Program;
use Google\Service\Drive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Google\Service\Drive\DriveFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Database\Query\JoinClause;
use App\Http\Requests\PostEpisodeSegmentRequest;

class EditorController extends Controller
{
    public function uploaded(Request $req): Response
    {
        $user = $req->user();
        $programs = Program::query()
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', function (JoinClause $join) {
                $join->on('episodes.id', '=', 'videos.episode_id')
                    ->whereNotNull('episodes.segment_count');
            })
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->groupBy('programs.id')
            ->paginate(15)->onEachSide(5);
        dd(json_encode($programs));
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', $programs);
    }

    public function notUploaded(Request $req): Response
    {
        $user = $req->user();
        $programs = Program::query()
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->leftJoin('videos', 'episodes.id', '=', 'videos.episode_id')
            ->whereNull('videos.id')
            ->groupBy('programs.id')
            ->paginate(15)->onEachSide(5);
        dd(json_encode($programs));
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', $programs);
    }

    public function program(Program $program): Response
    {
        $episodes = $program->episodes()->get();
        $program->episode_count = $episodes->count();
        $raw = DB::table('videos')
            ->select('videos.*')
            ->join('episodes', 'videos.episode_id', '=', 'episodes.id')
            ->where('episodes.program_id', '=', $program->id)
            ->orderBy('episodes.program_id', 'asc')
            ->orderBy('videos.segment_number', 'asc')
            ->get();
        $uploadedSegments = [];
        for ($i = 0, $j = 0; $i < $raw->count(); $i++) {
            $uploadedSegments[$j][] = $raw[$i];
            if (isset($raw[$i + 1]) && $raw[$i + 1]->episode_id != $raw[$i]->episode_id) {
                ++$j;
            }
        }
        dd(json_encode([
            'program' => $program,
            'episodes' => $episodes,
            'episode_with_segments' => $uploadedSegments,
        ]));
        #TODO: render the correct page & delete dd
        return Inertia::render('Cameraman/ProgramDetail', [
            'program' => $program,
            'episodes' => $episodes,
            'episode_with_segments' => $uploadedSegments,
        ]);
    }

    public function upload(PostEpisodeSegmentRequest $req): RedirectResponse
    {
        $payload = $req->validated();
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        client->addScope(Drive::DRIVE);
        $drive = new Drive($client);
        $metadata = new DriveFile(['name' => $payload['attachment']->getClientOriginalName()]);
        $file = $this->driveService->files->create($metadata, [
            'data' => $payload['attachment'],
            'fields' => 'id',
        ]);
        Video::create([
            'episode_id' => $payload['episode_id'],
            'object_id' => $file->id,
            'segment_number' => $payload['segment_number'],
        ]);
        return back();
    }
}
