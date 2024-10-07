<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function index(){
        $order = Order::all();
        return view('order.index',compact('order'));
    }

    public function create(){
        return view('order.add');
    }

    public function store(Request $request){
        $order = Order::create($request->all());
        $order->save();
        return redirect('/order');
    }

    public function edit($id){
        $order = Order::where('id',$id)->get();
        return view('order.edit',compact('order'));
    }

    public function update(Request $request){
        $order = Order::find($request);
        $order->update($request->all());
        return redirect('/order');
    }

    public function destroy($id){
        $order = Order::findOrFail($id);
        $order->delete();
        return redirect('/order');
    }
}
