<?php

namespace App\Http\Controllers;

use Auth;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Program;
use App\Enums\StatusEnum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\JoinClause;

class DashboardController extends Controller
{
    public const  MAX_RECORDS = 15;

    public function __invoke(Request $req): Response
    {
        /** @var App\Models\User */
        $user = Auth::user();
        if ($user->hasRole('cameraman')) {
            return $this->cameraman($req);
        } elseif ($user->hasRole('admin')) {
            return $this->admin();
        } elseif ($user->hasRole('editor')) {
            return $this->editor($req);
        } elseif ($user->hasRole('head_of_program')) {
            return $this->headOfProgram($req);
        } elseif ($user->hasRole('mcr')) {
            return $this->mcr($req);
        }
    }

    private function cameraman(Request $_): Response
    {
        $id = Auth::id();
        # TODO: find better way to implement this
        $pendingVideoPrograms = DB::table('programs')
            ->select('programs.*')
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', 'episodes.id', '=', 'videos.episode_id')
            ->leftJoin('user_video', function (JoinClause $join) use ($id) {
                $join->on('user_video.video_id', '=', 'videos.id');
                $join->on('user_video.user_id', '=', DB::raw($id));
            })
            ->whereNull('user_video.id')
            ->groupBy('programs.id')
            ->limit(5)
            ->get();
        $uploadedVideoPrograms = DB::table('programs')
            ->select('programs.*')
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', 'episodes.id', '=', 'videos.episode_id')
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->where('user_video.user_id', '=', $id)
            ->groupBy('programs.id')
            ->limit(5)
            ->get();

        return Inertia::render('Dashboard', [
            'pending_video_programs' => $pendingVideoPrograms,
            'uploaded_video_programs' => $uploadedVideoPrograms
        ]);
    }

    private function admin(): RedirectResponse
    {
        return redirect('admin/new-users');
    }

    public function editor(Request $_): Response
    {
        $allEditedVideoPrograms = Program::query()
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', function (JoinClause $join) {
                $join->on('episodes.id', '=', 'videos.episode_id')
                    ->whereNotNull('episodes.segment_count');
            })
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->groupBy('programs.id')
            ->get();
        $someUneditedVideoPrograms = Program::query()
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->leftJoin('videos', 'episodes.id', '=', 'videos.episode_id')
            ->whereNull('videos.id')
            ->groupBy('programs.id')
            ->paginate(15)->onEachSide(5);
        #TODO: render the correct page & delete dd
        return Inertia::render('Dashboard', [
            'all_edited_video_programs' => $allEditedVideoPrograms,
            'some_unedited_video_programs' => $someUneditedVideoPrograms,

        ]);
    }

    public function headOfProgram(Request $_): Response
    {
        $draftPrograms = Program::doesntHave('episodes')
            ->limit(self::MAX_RECORDS)
            ->get();
        $activePrograms = Program::has('episodes')
            ->with('latestEpisode')
            ->withCount('episodes')
            ->limit(self::MAX_RECORDS)
            ->get()
            ->transform(function (Program $program): Program {
                $program->status = $program->latestEpisode->status;
                unset($program->latestEpisode);
                return $program;
            });
        dd(json_encode([
            'draft_programs' => $draftPrograms,
            'active_programs' => $activePrograms,
        ], JSON_PRETTY_PRINT));
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', [
            'draft_programs' => $draftPrograms,
            'active_programs' => $activePrograms,
        ]);
    }

    public function mcr(Request $_): Response
    {
        $programs = Program::orderBy('created_at', 'desc')
            ->limit(self::MAX_RECORDS)
            ->get();
        $pendingPrograms = Program::whereHas('episodes', function (Builder $query) {
            $query->where('status', '=', StatusEnum::MCR_VALIDATION);
        })->limit(self::MAX_RECORDS)->get();
        // dd(json_encode([
        //     'programs' => $programs,
        //     'pending_programs' => $pendingPrograms,
        // ], JSON_PRETTY_PRINT));
        return Inertia::render('Dashboard', [
            'programs' => $programs,
            'pending_programs' => $pendingPrograms,
        ]);
    }
}
