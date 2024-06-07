<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Konselor;

class KonselorController extends Controller
{
    public function index(){
        $konselor = Konselor::all();
        return view('konselor.index', compact('konselor'));
    }

    public function create(){
        return view('konselor.add');
    }

    public function store(Request $request){
        $konselor = Konselor::create($request->all());
        $konselor->save();
        return redirect('/konselor');
    }

    public function edit($id){
        $konselor = Konselor::where('id',$id)->get();
        return view('konselor.edit',compact('konselor'));
    }

    public function update(Request $request){
        $konselor = Konselor::find($request);
        $konselor->update($request->all());
        return redirect('/konselor');
    }
    
    public function delete($id){
        $konselor = Konselor::findOrFail($id);
        $konselor->delete();
        return redirect('/konselor');
    }
}
