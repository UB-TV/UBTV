<?php

namespace App\Http\Controllers;

use Google\Client;
use Inertia\Inertia;
use App\Models\Video;
use Inertia\Response;
use App\Models\Episode;
use App\Models\Program;
use Google\Service\Drive;
use Illuminate\Http\Request;
use Google\Service\Drive\DriveFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Database\Query\JoinClause;
use App\Http\Requests\PostEpisodeSegmentRequest;
use Illuminate\Contracts\Database\Eloquent\Builder;

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
        #TODO: render the correct page & delete dd
        return Inertia::render('Shared/UploadedProgram', $programs);
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
        // dd(json_encode($programs));
        #TODO: render the correct page & delete dd
        return Inertia::render('Shared/NotUploadedProgram', $programs);
    }

    public function program(Program $program): Response
    {
        $episodes = Episode::with(['videos' => function (Builder $query) {
            $query->orderBy('segment_number', 'asc');
        }])->where('program_id', '=', $program->id)->get();
        $program->episode_count = $episodes->count();
        #TODO: render the correct page & delete dd
        dd(json_encode([
            'program' => $program,
            'episodes' => $episodes,
        ]));
        return Inertia::render('Editor/ProgramDetail', [
            'program' => $program,
            'episodes' => $episodes,
        ]);
    }

    public function upload(PostEpisodeSegmentRequest $req): RedirectResponse
    {
        $payload = $req->validated();
        dd($payload['segment_number']);
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $drive = new Drive($client);
        $metadata = new DriveFile(['name' => $payload['attachment']->getClientOriginalName()]);
        $file = $drive->files->create($metadata, [
            'data' => $payload['attachment'],
            'fields' => 'id',
        ]);

        $segment_number = (int) $payload['segment_number'];

        Video::create([
            'episode_id' => $payload['episode_id'],
            'object_id' => $file->id,
            'segment_number' => $segment_number,
        ]);
        return back();
    }
}
