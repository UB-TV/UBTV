<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Program;

class McrController extends Controller
{
    public const PAGINATION_PAGE_SIZE = 15;
    public const PAGINATION_EACH_SIDE_SIZE = 5;

    public function pending()
    {
        $programs = Program::query()
            ->where('is_active', '=', false)
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);
        dd(json_encode($programs));
        return Inertia::render('CHANGEME', $programs);
    }
}
