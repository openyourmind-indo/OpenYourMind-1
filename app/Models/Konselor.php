<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Konselor extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'name',
        'specialist',
        'cost',
        'profile_image',
        'experience',
        'alumnus',
        'phone_number'
    ];
}
