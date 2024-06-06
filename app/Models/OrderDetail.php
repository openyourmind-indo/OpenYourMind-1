<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'order_id',
        'konselor_id',
        'quantity',
        'konselor_cost'
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function konselor()
    {
        return $this->belongsTo(Konselor::class);
    }
}
