<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Episode;
use App\Models\Program;
use App\Enums\StatusEnum;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Builder;

class McrController extends Controller
{
    public const PAGINATION_PAGE_SIZE = 15;
    public const PAGINATION_EACH_SIDE_SIZE = 5;

    public function pending()
    {
        $programs = Program::whereHas('episodes', function (Builder $query) {
            $query->where('status', '=', StatusEnum::MCR_VALIDATION);
        })
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        return Inertia::render('MCR/ProgramValidation', $programs);
    }

    public function programs()
    {
        $programs = Program::orderBy('created_at', 'desc')
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        return Inertia::render('MCR/Program', $programs);
    }

    public function pendingProgram(Program $program)
    {
        // TODO: videos segment
        $program->load('episodes.videos');
        // dd(json_encode($program, JSON_PRETTY_PRINT));
        return Inertia::render('MCR/ProgramDetail', $program);
    }

    public function program(Program $program)
    {
        // TODO: videos status
        $program->load('episodes');
        // dd(json_encode($program, JSON_PRETTY_PRINT));
        return Inertia::render('MCR/ProgramDetail', $program);
    }

    public function update(Episode $episode, Request $request)
    {
        $validated = $request->validate([
            'episode_id' => ['required'],
            'status' => ['required', Rule::enum(StatusEnum::class)],
        ]);
        $episode->status = $validated['status'];
        return response(status: 200);
    }
}
