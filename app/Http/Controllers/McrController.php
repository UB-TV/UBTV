<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Episode;
use App\Models\Program;
use App\Enums\StatusEnum;
use App\Models\Notification;
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

        dd(json_encode($programs, JSON_PRETTY_PRINT));
        return Inertia::render('CHANGEME', $programs);
    }

    public function programs()
    {
        $programs = Program::orderBy('created_at', 'desc')
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        dd(json_encode($programs, JSON_PRETTY_PRINT));
        return Inertia::render('CHANGEME', $programs);
    }

    public function pendingProgram(Program $program)
    {
        // TODO: videos segment
        $program->load('episodes.videos');
        dd(json_encode($program, JSON_PRETTY_PRINT));
        return Inertia::render('CHANGEME', $program);
    }

    public function program(Program $program)
    {
        // TODO: videos status
        $program->load('episodes');
        dd(json_encode($program, JSON_PRETTY_PRINT));
        return Inertia::render('CHANGEME', $program);
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

    public function notifications(): \Inertia\Response
    {
        $notifications = Notification::with(['user', 'program', 'episode', 'role'])
            ->orderBy('created_at', 'desc')
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->through(function (Notification $notification): Notification {
                $notification->from = $notification->user->name;
                $notification->program_name = $notification->program->name;
                $notification->episode_id = $notification->episode->id;
                $notification->role_name = $notification->role->name;
                unset(
                    $notification->user,
                    $notification->program,
                    $notification->episode,
                    $notification->role,
                );
                return $notification;
            })
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        dd(json_encode($notifications, JSON_PRETTY_PRINT));

        return Inertia::render('CHANGEME', $notifications);
    }
}
