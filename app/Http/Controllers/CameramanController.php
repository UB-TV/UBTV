<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;

class CameramanController extends Controller
{
    public function program(string $slug)
    {
        $program = Program::where('name', $slug)->firstOrFail();
        $episodes = $program->episodes()->get();
        $program->episode_count = $episodes->count();
        dd([
            'program' => $program,
            'episodes' => $episodes
        ]);
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', [
            'program' => $program,
            'episodes' => $episodes
        ]);
    }

    public function uploaded(Request $req)
    {
        $user = $req->user();
        $uploadedVideoPrograms = DB::table('programs')
            ->select('programs.*')
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', 'episodes.id', '=', 'videos.episode_id')
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->where('user_video.user_id', '=', $user->id)
            ->groupBy('programs.id')
            ->paginate(15);
        dd($uploadedVideoPrograms);
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', $uploadedVideoPrograms);
    }

    public function pending(Request $req)
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
            ->paginate(15);
        dd($pendingVideoPrograms);
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', $pendingVideoPrograms);
    }
}
