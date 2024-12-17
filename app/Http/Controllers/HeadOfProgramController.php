<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Episode;
use App\Models\Program;
use App\Http\Requests\CreateEpisodeRequest;
use App\Http\Requests\CreateProgramRequest;
use App\Http\Requests\UpdateProgramRequest;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Contracts\Routing\ResponseFactory;

class HeadOfProgramController extends Controller
{
    public function drafts(): Response
    {
        $programs = Program::doesntHave('episodes')
            ->paginate()
            ->onEachSide(5);
        // dd(json_encode($programs, JSON_PRETTY_PRINT));
        return Inertia::render('HeadOfProgram/RegisteredProgram', [
            'programs' => $programs
        ]);
    }

    public function actives(): Response
    {
        $programs = Program::has('episodes')
            ->with('latestEpisode')
            ->withCount('episodes')
            ->paginate()
            ->through(function (Program $program): Program {
                $program->status = $program->latestEpisode->status;
                unset($program->latestEpisode);
                return $program;
            })->onEachSide(5);
        dd(json_encode($programs, JSON_PRETTY_PRINT));
        return Inertia::render('HeadOfProgram/ActiveProgram', [
            'programs' => $programs
        ]);
    }

    public function program($slug): Response
    {
        $program = Program::where('slug', $slug)->first();

        if (!$program) {
            abort(404);
        }

        // Menambahkan episodes ke dalam data program
        $program->episodes = $program->episodes()->get();
        // dd(json_encode($program));
        return Inertia::render('HeadOfProgram/ProgramDetail', [
            'program' => $program
        ]);
    }


    public function create(CreateProgramRequest $req): HttpResponse|ResponseFactory
    {
        try {
            $payload = $req->validated();
            Program::create($payload);
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 201);
    }

    public function update(UpdateProgramRequest $req): HttpResponse|ResponseFactory
    {
        try {
            $payload = $req->validated();
            Program::update($payload);
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 200);
    }

    public function createEpisode(CreateEpisodeRequest $req): HttpResponse
    {
        try {
            $payload = $req->validated();
            Episode::create($payload);
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 201);
    }

    public function delete(Program $program): Response
    {
        try {
            $program->delete();
        } catch (Exception) {
            return response(status: 500);
        }
        return response(status: 200);
    }
}
