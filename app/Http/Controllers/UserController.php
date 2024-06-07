<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $user = User::all();
        return view('user.index',compact('user'));
    }

    public function create(){
        return view('user.add');
    }

    public function store(Request $request){
        $user = User::create($request->all());
        $user->save();
        return redirect('/user');
    }

    public function edit($id){
        $user = User::where('id',$id)->get();
        return view('user.edit',compact('user'));
    }

    public function update(Request $request){
        $user = User::find($request);
        $user->update($request->all());
        return redirect('/user');
    }

    public function destroy($id){
        $user = User::findOrFail($id);
        $user->delete();
        return redirect('/user');
    }
}
