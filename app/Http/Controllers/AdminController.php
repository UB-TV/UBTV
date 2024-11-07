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
        // dd(json_encode($users));
        #TODO: render the correct page & delete dd
        return Inertia::render('Admin/NewUsers', [
            'users' => $users
        ]);
    }

    public function approval(): Response
    {
        $users = User::query()->where('is_active', '=', true)->paginate(15)->onEachSide(5);
        // dd(json_encode($users));
        #TODO: render the correct page & delete dd
        return Inertia::render('Admin/Users', [
            'users' => $users
        ]);
    }

    public function updateUserStatus(Request $req, User $user): RedirectResponse
    {
        $approve = filter_var($req->input('approve'), FILTER_VALIDATE_BOOLEAN);
        $user->is_active = $approve;
        $user->save();

        return redirect()->back();
    }

    public function deleteUser(int $id): RedirectResponse
    {
        User::destroy($id);
        return redirect()->back();
    }
}
