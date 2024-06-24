<?php
// app/Http/Controllers/ArticleController.php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;

class ArtikelController extends Controller
{
    public function index()
    {
        return Artikel::all();
    }

    public function store(Request $request)
    {
        $article = Artikel::create($request->all());
        return response()->json($article, 201);
    }

    public function show($id)
    {
        return Artikel::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $article = Artikel::findOrFail($id);
        $article->update($request->all());
        return response()->json($article, 200);
    }

    public function destroy($id)
    {
        Artikel::destroy($id);
        return response()->json(null, 204);
    }
}
