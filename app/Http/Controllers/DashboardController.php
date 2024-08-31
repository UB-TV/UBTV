<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke(Request $req)
    {
        return Inertia::render('Dashboard', [
            'role' => $req->user()->getRoleNames()->first(),
        ]);
    }
}
