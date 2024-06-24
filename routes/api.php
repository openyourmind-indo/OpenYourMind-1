<?php

use App\Http\Controllers\ArtikelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/articles',[ArtikelController::class,'index']);
