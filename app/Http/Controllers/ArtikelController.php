<?php

namespace App\Http\Controllers;
use App\Models\Artikel;
use Illuminate\Http\Request;

class ArtikelController extends Controller
{
    public function index(){
        $artikel = Artikel::all();
        return view('Artikel.index', compact('artikel'));
    }

    public function create(){
        return view('Artikel.add');
    }   

    public function store(Request $request){
        $artikel = Artikel::create($request->all());
        $artikel->save();
        return redirect('/artikel');

    }

    public function edit($id){
        $artikel = Artikel::where('id',$id)->get();
        return view('Artikel.edit',compact('artikel'));
    }

    public function update(Request $request){
        $artikel = Artikel::find($request);
        $artikel->update($request->all());
        return redirect('/artikel');
    }

    public function destroy($id){
        $artikel = Artikel::findOrFail($id);
        $artikel->delete();
        return redirect('/artikel');
    }
}
