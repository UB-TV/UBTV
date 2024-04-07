<?php
namespace App\Http\Controllers;

use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller {
    public function redirect() {
        return Socialite::driver('google')->redirect();
    }

    public function callback() {
        $res = Socialite::driver('google')->user();
        $user = User::whereEmail($res->email)->first();
        if ($user === null) {
            abort(401);
        }
    }
}
