<?php

namespace App\Http\Controllers;

use Exception;
use Google\Client;
use Inertia\Inertia;
use App\Models\Video;
use Inertia\Response;
use App\Models\Episode;
use App\Models\Program;
use Google\Service\Drive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Google\Service\Drive\DriveFile;
use App\Http\Requests\PostEpisodeRequest;
use Illuminate\Database\Query\JoinClause;
use App\Http\Requests\PostEpisodeVideosRequest;

class CameramanController extends Controller
{
    private Client $client;
    private Drive $driveService;

    public function __construct()
    {
        $this->client = new Client();
        $this->client->useApplicationDefaultCredentials();
        $this->client->addScope(Drive::DRIVE);
        $this->driveService = new Drive($this->client);
    }

    public function program(Program $program): Response
    {
        $episodes = $program->episodes()->get();
        $program->episode_count = $episodes->count();
        return Inertia::render('Cameraman/ProgramDetail', [
            'program' => $program,
            'episodes' => $episodes
        ]);
    }

    public function uploaded(Request $req): Response
    {
        $user = $req->user();
        $uploadedVideoPrograms = DB::table('programs')
            ->select('programs.*')
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', 'episodes.id', '=', 'videos.episode_id')
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->where('user_video.user_id', '=', $user->id)
            ->groupBy('programs.id')
            ->paginate(15)->onEachSide(5);

        return Inertia::render('Shared/UploadedProgram', $uploadedVideoPrograms);
    }

    public function pending(Request $req): Response
    {
        $user = $req->user();
        $pendingVideoPrograms = DB::table('programs')
            ->select('programs.*')
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', 'episodes.id', '=', 'videos.episode_id')
            ->leftJoin('user_video', function (JoinClause $join) use ($user) {
                $join->on('user_video.video_id', '=', 'videos.id');
                $join->on('user_video.user_id', '=', DB::raw($user->id));
            })
            ->whereNull('user_video.id')
            ->groupBy('programs.id')
            ->paginate(15)->onEachSide(5);
        return Inertia::render('Shared/NotUploadedProgram', $pendingVideoPrograms);
    }

    public function upload(PostEpisodeVideosRequest $req): Response
    {
        try {
            $payload = $req->validated();
            $metadata = new DriveFile(['name' => $payload['attachment']->getClientOriginalName()]);
            $file = $this->driveService->files->create($metadata, [
                'data' => $payload['attachment'],
                'fields' => 'id',
            ]);
            Video::create([
                'episode_id' => $payload['episode_id'],
                'object_id' => $file->id,
                ]);
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 200);
    }

    public function createEpisode(PostEpisodeRequest $req): Response
    {
        try {
            $payload = $req->validated();
            Episode::create($payload);
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 201);
    }
}
