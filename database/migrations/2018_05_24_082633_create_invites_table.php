<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invites', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('parent_user_id')->unsigned()->default(1);
            $table->foreign('parent_user_id')->references('id')->on('user');
            $table->integer('child_user_id')->unsigned()->default(2);
            $table->foreign('child_user_id')->references('id')->on('user');
            $table->string('code');
            $table->string('email');
            $table->timestamp('claimed')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invites');
    }
}
