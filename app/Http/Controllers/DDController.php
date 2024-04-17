<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DDController extends Controller {
    public function __invoke(Request $req) {
        dd(User::clean($req->user()));
    }
}
