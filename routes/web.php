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
})->name('not-uploaded-program-detail');

Route::get('/message', function () {
    return Inertia::render('Shared/ProgramMessage');
})->name('program-message');
