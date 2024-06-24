<?php

use App\Http\Controllers\ArtikelController;
use Illuminate\Support\Facades\Route;


Route::get('{any}', function () {
    return View::make('welcome');
})->where('any', '.*');








