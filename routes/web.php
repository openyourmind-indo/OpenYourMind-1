<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
});


Route::get('/services', function () {
    return view('services');
});

Route::get('/services/{serviceID}', function () {
    return view('login');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/article', function () {
    return view('register');
});

Route::get('/article/{article-id}', function () {
    return view('register');
});

Route::get('/pricing', function () {
    return view('pricing');
});

Route::get('/gallery', function () {
    return view('gallery');
});
