<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Episode;
use App\Enums\RolesEnum;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Role;

class NotificationController extends Controller
{
    public const PAGINATION_PAGE_SIZE = 15;
    public const PAGINATION_EACH_SIDE_SIZE = 5;

    public function store(Request $request): Response
    {
        $payload = $request->validate([
            'program_id' => ['required'],
            'episode_id' => ['required'],
            'message' => ['required', 'string'],
        ]);
        /** @var App\Models\User */
        $user = auth()->user();

        $episode = Episode::where('program_id', '=', 'program_id')
            ->where('id', '=', $payload['episode_id'])
            ->first();
        if ($episode === null) {
            return response(status: 404);
        }

        $permittedRoleID = 0;
        if ($user->hasRole(RolesEnum::PRODUCER)) {
            $permittedRoleID = Role::firstWhere('name', RolesEnum::EDITOR);
        } elseif ($user->hasRole(RolesEnum::MCR)) {
            $permittedRoleID = Role::firstWhere('name', RolesEnum::PRODUCER);
        } else {
            return response(status: 403);
        }

        try {
            Notification::create([
                'user_id' => $user->id,
                'program_id' => $payload['program_id'],
                'episode_id' => $episode->id,
                'role_id' => $permittedRoleID,
                'message' => $payload['message'],
            ]);
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 201);
    }
}
