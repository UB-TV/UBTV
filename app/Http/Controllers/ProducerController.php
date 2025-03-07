<?php
namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Video;
use App\Models\Episode;
use App\Models\Program;
use App\Enums\RolesEnum;
use App\Enums\StatusEnum;
use App\Models\Notification;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Requests\CreateEpisodeRequest;
use App\Http\Requests\UpdateEpisodeRequest;

class ProducerController extends Controller {
    public const PAGINATION_PAGE_SIZE = 15;
    public const PAGINATION_EACH_SIDE_SIZE = 5;

    public function newPrograms(): \Inertia\Response {
        $programs = Program::orderBy('created_at', 'desc')
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        return Inertia::render('Producer/NewProgram', $programs);
    }

    public function pending(): \Inertia\Response {
        $programs = Program::whereHas('episodes', function (Builder $query) {
            $query->where('status', '=', StatusEnum::PRODUCER_VALIDATION);
        })
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);

        return Inertia::render('Producer/PendingProgram', $programs);
    }

    public function notifications(): \Inertia\Response {
        $notifications = Notification::with(['user', 'program', 'episode', 'role'])
            ->whereHas('role', function (Builder $query) {
                $query->where('name', '=', RolesEnum::PRODUCER);
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

        return Inertia::render('Shared/Notification', $notifications);
    }

    public function program(Program $program): \Inertia\Response {
        $program->load('episodes.videos');
        $program->episodes->transform(function (Episode $episode, int $_): Episode {
            $episode->videos->transform(function (Video $video, int $key): Video {
                $video->url = "https://drive.google.com/uc?export=download&id={$video->object_id}";
                return $video;
            });
            return $episode;
        });
        return Inertia::render('Producer/ProgramDetail', $program);
    }

    public function createEpisode(CreateEpisodeRequest $req): \Illuminate\Http\Response {
        try {
            $payload = $req->validated();
            Episode::create($payload);
        } catch (Exception $e) {
            dd($e->getMessage());
            return response(status: 500);
        }
        return response(status: 201);
    }

    public function updateEpisode(Episode $episode, UpdateEpisodeRequest $request): \Illuminate\Http\Response {
        try {
            $payload = $request->validated();
            $episode->update($payload);
        } catch (Exception $e) {
            return response(['message' => $e->getMessage()], 500);
        }
        return response(status: 200);
    }

    public function deleteEpisode(Episode $episode): \Illuminate\Http\Response {
        try {
            $episode->delete();
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 200);
    }
}
