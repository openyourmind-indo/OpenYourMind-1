<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterUsersTableChangePasswordColumn extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // Change the password column to a string with a length of 255
            $table->string('password', 255)->change();
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Revert the password column back to its original length (assuming it was 60)
            $table->string('password', 60)->change();
        });
    }
}
