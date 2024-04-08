<?php
namespace App\Http\Controllers\Interfaces;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller {
    public function __invoke(Request $req) {
        return Inertia::render('Dashboard', ['role' => $req->user()->getRoleNames()->first()]);
    }
}
