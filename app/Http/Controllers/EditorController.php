<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;

class EditorController extends Controller
{
    public function uploaded(Request $req): Response
    {
        $user = $req->user();
        $raw = DB::table('programs')
            ->select(['programs.*', DB::raw('sum(episodes.segment_count) as segment_total'), DB::raw('count(*) as video_count')])
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', function (JoinClause $join) {
                $join->on('episodes.id', '=', 'videos.episode_id');
                $join->on('episodes.segment_count', 'is', DB::raw('not null'));
            })
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->where('user_video.user_id', '=', $user->id)
            ->groupBy('programs.id')
            ->paginate()
            ->onEachSide(15);
        $filtered = $raw->filter(function ($data, $key) {
            return (int)$data->segment_total === $data->video_count;
        });
        $programs = $filtered->transform(function ($data, $key) {
            unset($data->segment_total, $data->video_count);
            return $data;
        });
        dd(json_encode($programs));
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', $programs);
    }

    // Lazy implementation, fix later
    public function notUploaded(Request $req): Response
    {
        $user = $req->user();
        $raw = DB::table('programs')
            ->select(['programs.*', DB::raw('sum(episodes.segment_count) as segment_total'), DB::raw('count(*) as video_count')])
            ->join('episodes', 'programs.id', '=', 'episodes.program_id')
            ->join('videos', function (JoinClause $join) {
                $join->on('episodes.id', '=', 'videos.episode_id');
            })
            ->join('user_video', 'videos.id', '=', 'user_video.video_id')
            ->where('user_video.user_id', '=', $user->id)
            ->groupBy('programs.id')
            ->paginate()
            ->onEachSide(15);
        $filtered = $raw->filter(function ($data, $key) {
            return (int)$data->segment_total === $data->video_count;
        });
        $programs = $filtered->transform(function ($data, $key) {
            unset($data->segment_total, $data->video_count);
            return $data;
        });
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
            ->orderBy('programs.id', 'asc')
            ->orderBy('videos.segment_number', 'asc')
            ->get();
        $uploadedSegments = [];
        for ($i = 0, $j = 0; $i < $raw->count(); $i++) {
            if (isset($raw[$i + 1]) && $raw[$i + 1]->episode_id != $raw[$i]->episode_id) {
                ++$j;
            }
            $uploadedSegments[$j][] = $raw[$i];
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
}
