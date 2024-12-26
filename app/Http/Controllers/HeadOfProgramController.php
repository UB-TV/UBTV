<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Program;
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
        return Inertia::render('HeadOfProgram/ActiveProgram', [
            'programs' => $programs
        ]);
    }

    public function draftProgram(Program $program): Response
    {
        if ($program->episodes()->exists()) {
            abort(404);
        }

        return Inertia::render('HeadOfProgram/ProgramDetail', [
            'program' => $program,
            'source' => 'drafts'
        ]);
    }

    public function activeProgram(Program $program): Response
    {
        if (!$program->episodes()->exists()) {
            abort(404);
        }

        $program->load('episodes');

        return Inertia::render('HeadOfProgram/ProgramDetail', [
            'program' => $program,
            'source' => 'actives'
        ]);
    }

    public function create(CreateProgramRequest $req): HttpResponse|ResponseFactory
    {
        try {
            $payload = $req->validated();
            Program::create($payload);
        } catch (Exception $e) {
            dd($e->getMessage());
            return response(status: 500);
        }
        return response(status: 201);
    }

    public function update(UpdateProgramRequest $req, $slug): HttpResponse|ResponseFactory
    {
        try {
            $program = Program::where('slug', $slug)->firstOrFail();
            $payload = $req->validated();
            $program->update($payload);
        } catch (Exception $e) {
            return response(['message' => $e->getMessage()], 500);
        }
        return response(status: 200);
    }

    public function delete(Program $program): HttpResponse
    {
        try {
            $program->delete();
        } catch (Exception $e) {
            dd($e->getMessage());
            return response(status: 500);
        }
        return response(status: 200);
    }
}
