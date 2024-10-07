<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


// Rute untuk menangani semua halaman lainnya
Route::get('{any}', function () {
    return view('welcome');
})->where('any', '.*');
