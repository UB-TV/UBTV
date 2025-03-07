<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Video;
use App\Models\Episode;
use App\Models\Program;
use App\Enums\RolesEnum;
use App\Enums\StatusEnum;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Builder;

class McrController extends Controller {
    public const PAGINATION_PAGE_SIZE = 15;
    public const PAGINATION_EACH_SIDE_SIZE = 5;

    public function pending(): \Inertia\Response {
        $programs = Program::whereHas('episodes', function (Builder $query) {
            $query->where('status', '=', StatusEnum::MCR_VALIDATION);
        })
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        return Inertia::render('MCR/ProgramValidation', $programs);
    }

    public function programs(): \Inertia\Response {
        $programs = Program::orderBy('created_at', 'desc')
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        return Inertia::render('MCR/Program', $programs);
    }

    public function pendingProgram(Program $program): \Inertia\Response {
        $program->load('episodes.videos');
        $program->episodes->transform(function (Episode $episode, int $_): Episode {
            $episode->videos->transform(function (Video $video, int $key): Video {
                $video->url = "https://drive.google.com/uc?export=download&id={$video->object_id}";
                return $video;
            });
            return $episode;
        });
        return Inertia::render('MCR/ProgramDetail', $program);
    }

    public function program(Program $program): \Inertia\Response {
        $program->load('episodes');
        return Inertia::render('MCR/ProgramDetail', $program);
    }

    public function update(Episode $episode, Request $request): \Illuminate\Http\Response {
        $validated = $request->validate([
            'episode_id' => ['required'],
            'status'     => ['required', Rule::enum(StatusEnum::class)],
        ]);
        $episode->status = $validated['status'];
        $episode->save();
        return response(status: 200);
    }

    public function notifications(): \Inertia\Response {
        $notifications = Notification::with(['user', 'program', 'episode', 'role'])
            ->whereHas('role', function (Builder $query) {
                $query->where('name', '=', RolesEnum::MCR);
            })
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

        // dd(json_encode($notifications, JSON_PRETTY_PRINT));

        return Inertia::render('Shared/Notification', $notifications);
    }
}
