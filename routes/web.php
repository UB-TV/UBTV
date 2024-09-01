<?php

use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('new-users');
})->name('dashboard');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::get('/new-users', function () {
    return Inertia::render('Shared/NewUsersDashboard');
})->name('new-users');

Route::get('/users', function () {
    return Inertia::render('Shared/UsersDashboard');
})->name('users');
