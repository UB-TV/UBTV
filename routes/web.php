<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DDController;
use App\Http\Controllers\CameramanController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GoogleSSOController;

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
    ########### CLEAN ###########
    # UI (ideally only contain GET routes)
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::controller(CameramanController::class)->prefix('/cameraman')->group(function () {
        Route::get('/pending', 'pending');
        Route::get('/uploaded', 'uploaded');
        Route::get('/{slug}', 'program');
    });

    # API
    Route::prefix('/api/v1')->group(function () {
        Route::prefix('/videos')->group(function () {
            Route::post('/', [CameramanController::class, 'upload']);
        });
        Route::prefix('/episodes')->group(function () {
            Route::post('/', [CameramanController::class, 'createEpisode']);
        });
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

    Route::get('/dd', DDController::class);
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

    Route::get('/new-users', function () {
        return Inertia::render('Admin/NewUsers');
    })->name('new-users');

    Route::get('/users', function () {
        return Inertia::render('Admin/Users');
    })->name('users');
});
