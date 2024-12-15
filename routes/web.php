<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\McrController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\CameramanController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GoogleSSOController;
use App\Http\Controllers\HeadOfProgramController;

Route::controller(GoogleSSOController::class)->prefix('/sso/google')->group(function () {
    Route::get('/redirect', 'redirect')->name('sso.google.redirect');
    Route::get('/callback', 'callback')->name('sso.google.callback');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::middleware(['auth'])->group(function () {
    # UI (ideally only contain GET routes)
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::controller(CameramanController::class)->prefix('/cameraman')->group(function () {
        Route::get('/pending', 'pending');
        Route::get('/uploaded', 'uploaded');
        Route::get('/{program:slug}', 'program');
    })->middleware('role:cameraman');
    Route::controller(AdminController::class)->prefix('/admin')->group(function () {
        Route::get('/users', 'approval');
        Route::get('/new-users', 'newUsers');
    })->middleware('role:admin');
    Route::controller(EditorController::class)->prefix('/editor')->group(function () {
        Route::get('/uploaded', 'uploaded');
        Route::get('/pending', 'notUploaded');
        Route::get('/{program:slug}', 'program');
    })->middleware('role:editor');
    Route::controller(HeadOfProgramController::class)->prefix('/head-of-program')->group(function () {
        Route::get('/drafts', 'drafts');
        Route::get('/actives', 'actives');
        Route::get('/{program:slug}', 'program');
    })->middleware('role:head_of_program');
    Route::controller(McrController::class)->prefix('/mcr')->group(function () {
        Route::get('/pending', 'pending');
        Route::get('/programs', 'programs');
        Route::get('/pending/{program:slug}', 'pendingProgram');
        Route::get('/programs/{program:slug}', 'program');
    })->middleware('role:mcr');

    # API
    Route::prefix('/api/v1')->group(function () {
        Route::prefix('/programs')->group(function () {
            Route::post('/', [HeadOfProgramController::class, 'create']);
            Route::patch('/', [HeadOfProgramController::class, 'update']);
            Route::delete('/{program:slug}', [HeadOfProgramController::class, 'delete']);
        })->middleware('role:head_of_program');
        Route::prefix('/episodes')->group(function () {
            Route::post('/', [HeadOfProgramController::class, 'createEpisode']);
            Route::patch('/{episode:id}', [McrController::class, 'update']);
        })->middleware('role:head_of_program');
        Route::prefix('/videos')->group(function () {
            Route::post('/', [CameramanController::class, 'upload']);
        })->middleware('role:cameraman');
        Route::prefix('/users')->group(function () {
            Route::patch('/{user:id}', [AdminController::class, 'updateUserStatus']);
            Route::delete('/{id}', [AdminController::class, 'deleteUser']);
        })->middleware('role:admin');
    });
    #############################

    Route::get('/uploaded', function () {
        return Inertia::render('Shared/UploadedProgram');
    })->name('uploaded-program');

    Route::get('/not-uploaded', function () {
        return Inertia::render('Shared/NotUploadedProgram');
    })->name('not-uploaded-program');

    Route::get('/not-uploaded/cameraman/{slug}', function () {
        return Inertia::render('Cameraman/ProgramDetail');
    })->name('cameraman-not-uploaded-program-detail');

    Route::get('/message', function () {
        return Inertia::render('Shared/ProgramMessage');
    })->name('program-message');

    Route::get('/not-uploaded/editor/{slug}', function () {
        return Inertia::render('Editor/ProgramDetail');
    })->name('editor-not-uploaded-program-detail');

    Route::get('/validation', function () {
        return Inertia::render('MCR/Validation');
    })->name('validation');

    Route::get('/validation/{slug}', function () {
        return Inertia::render('MCR/ProgramValidation');
    })->name('program-validation');

    Route::get('/program', function () {
        return Inertia::render('MCR/Program');
    })->name('mcr-program');

    Route::get('program/{slug}', function () {
        return Inertia::render('MCR/ProgramDetail');
    })->name('mcr-program-detail');

    Route::get('/validation/producer/{slug}', function () {
        return Inertia::render('Producer/ProgramValidation');
    })->name('producer-program-validation');

    Route::get('/new-program', function () {
        return Inertia::render('Producer/NewProgram');
    })->name('producer-new-program');

    Route::get('/new-program/producer/{slug}', function () {
        return Inertia::render('Producer/ProgramDetail');
    })->name('producer-new-program-detail');
});
