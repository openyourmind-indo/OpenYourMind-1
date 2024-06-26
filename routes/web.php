<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::get('{any}', function () {
    return View::make('welcome');
})->where('any', '.*');

// Route::prefix('api')->group(function () {
//     Route::post('/register', [AuthController::class, 'register']);
//     Route::post('/login', [AuthController::class, 'login']);
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::get('/user', [AuthController::class, 'getUser']);
// });






