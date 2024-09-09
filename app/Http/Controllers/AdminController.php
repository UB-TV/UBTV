<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class AdminController extends Controller
{
    public function approval(): Response
    {
        $users = User::query()->paginate(15);
        dd(json_encode($users));
        #TODO: render the correct page & delete dd
        return Inertia::render('CHANGEME', $users);
    }

    public function deleteUser(int $id): RedirectResponse
    {
        User::destroy($id);
        return back();
    }
}
