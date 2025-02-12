<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class AdminController extends Controller
{
    public function newUsers(): Response
    {
        $users = User::query()->where('is_active', '=', null)->paginate(15)->onEachSide(5);

        $users = User::with('roles:name')
            ->where('is_active', '=', null)
            ->paginate(15)
            ->onEachSide(5)
            ->through(function ($user) {
                $user->role = $user->roles->first()->name ?? null;
                unset($user->roles);
                return $user;
            });

        return Inertia::render('Admin/NewUsers', [
            'users' => $users
        ]);
    }

    public function approval(): Response
    {
        $users = User::with('roles:name')
            ->where('is_active', '=', true)
            ->paginate(15)
            ->onEachSide(5)
            ->through(function ($user) { // Use 'through' for pagination with 'map'
                $user->role = $user->roles->first()->name ?? null; // Assign the role's name as a property
                unset($user->roles); // Remove the roles relationship to avoid redundancy
                return $user;
            });
        return Inertia::render('Admin/Users', [
            'users' => $users
        ]);
    }

    public function updateUserStatus(Request $req, User $user): RedirectResponse
    {
        $approve = filter_var($req->input('approve'), FILTER_VALIDATE_BOOLEAN);
        $user->is_active = $approve;
        $user->save();

        return response(status: 200);
    }

    public function deleteUser(int $id): RedirectResponse
    {
        User::destroy($id);
        return response(status: 200);
    }
}
