<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CategoriesStudioCasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_studio_cases', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('categories_id')->unsigned()->default(1);
            $table->foreign('categories_id')->references('id')->on('studio_cases');
            $table->integer('studio_cases_id')->unsigned()->default(1);
            $table->foreign('studio_cases_id')->references('id')->on('studio_cases');
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
        Schema::dropIfExists('categories_studio_cases');
    }
}
