<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;

class DashboardController extends Controller
{
    public function __invoke(Request $req): Response
    {
        $user = $req->user();
        if ($user->hasRole('cameraman')) {
            return $this->cameraman($req);
        } elseif ($user->hasRole('admin')) {
            return $this->admin($req);
        };
    }

    private function cameraman(Request $req): Response
    {
        # TODO: find better way to implement this
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
            ->get();
        $uploadedVideoPrograms = DB::table('programs')
            ->select('programs.*')
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', 'episodes.id', '=', 'videos.episode_id')
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->where('user_video.user_id', '=', $user->id)
            ->groupBy('programs.id')
            ->get();

        dd(json_encode([
            'pending_video_programs' => $pendingVideoPrograms,
            'uploaded_video_programs' => $uploadedVideoPrograms
        ]));
        return Inertia::render('Dashboard', [
            'pending_video_programs' => $pendingVideoPrograms,
            'uploaded_video_programs' => $uploadedVideoPrograms
        ]);
    }

    private function admin(Request $req): Response
    {
        $users = User::query()
            ->where('is_active', '=', false)
            ->paginate(15);
        dd(json_encode($users));
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', $users);
    }
}
