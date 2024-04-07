<?php
namespace App\Http\Controllers\Interfaces;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DashboardController extends Controller {
    public function __invoke() {
        return Inertia::render('Dashboard');
    }
}
