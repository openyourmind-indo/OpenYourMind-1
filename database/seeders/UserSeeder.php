<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users=[
            ['name'=>"faiz",'role'=>'user','email'=>"faizganteng@gmail.com",'password'=>'111',
            'phone_number'=>"0817994433322",'birth_date'=>date_create_from_format("j-M-Y","15-Mar-2013")],
            ['name'=>"Alwan",'role'=>'admin','email'=>"alwanalwan@gmail.com",'password'=>'111',
            'phone_number'=>"0817994433322",'birth_date'=>date_create_from_format("j-M-Y","16-Mar-2013")],
            ['name'=>"okta",'role'=>'konselor','email'=>"iniokta@gmail.com",'password'=>'111',
            'phone_number'=>"0817994433322",'birth_date'=>date_create_from_format("j-M-Y","17-Mar-2013")],
            ['name'=>"levian",'role'=>'user','email'=>"kulevian@gmail.com",'password'=>'111',
            'phone_number'=>"0817994433322",'birth_date'=>date_create_from_format("j-M-Y","18-Mar-2013")]
        ];

        foreach($users as $user){
            User::create($user);
        }
    }
}