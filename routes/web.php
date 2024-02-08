<?php

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

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

Route::get('/program', function () {
    return Inertia::render('MCR/Program');
})->name('mcr-program');

Route::get('/program/{slug}', function () {
    return Inertia::render('MCR/ProgramDetail');
})->name('mcr-program-detail');
