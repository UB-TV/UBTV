<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::get('/process-program', function () {
    return Inertia::render('Shared/ProcessProgram');
})->name('process-program');

Route::get('/process-program/program-head/{slug}', function () {
    return Inertia::render('ProgramHead/ProgramDetail');
})->name('process-program-detail');

Route::get('/registered-program', function () {
    return Inertia::render('Shared/RegisteredProgram');
})->name('registered-program');

Route::get('/registered-program/program-head/{slug}', function () {
    return Inertia::render('ProgramHead/ProgramDetail');
})->name('registered-program-detail');
