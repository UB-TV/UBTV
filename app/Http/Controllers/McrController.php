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
            ->orderBy('created_at')
            ->where('is_active', '=', false)
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);
        dd(json_encode($programs));
        return Inertia::render('CHANGEME', $programs);
    }

    public function programs()
    {
        $programs = Program::query()
            ->orderBy('created_at')
            ->paginate(self::PAGINATION_PAGE_SIZE)
            ->onEachSide(self::PAGINATION_EACH_SIDE_SIZE);
        dd(json_encode($programs));
        return Inertia::render('CHANGEME', $programs);
    }

    public function program(Program $program)
    {
        // TODO: videos segment
        $program->episodes = $program->episodes();
        dd(json_encode($program));
        return Inertia::render('CHANGEME', $program);
    }
}
