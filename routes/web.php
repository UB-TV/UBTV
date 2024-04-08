<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\Interfaces\DashboardController;

Route::controller(GoogleController::class)->prefix('/sso/google')->group(function () {
    Route::get('/redirect', 'redirect')->name('sso.google.redirect');
    Route::get('/callback', 'callback')->name('sso.google.callback');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', DashboardController::class)->name('dashboard');
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

    Route::get('/program/{slug}', function () {
        return Inertia::render('MCR/ProgramDetail');
    })->name('mcr-program-detail');
});
