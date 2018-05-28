<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeStudioCasesTable1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('studio_cases', function (Blueprint $table) {
            $table->text('text');
            $table->integer('likesCount');
            $table->text('challenge');
            $table->text('solution');
            $table->string('solutionImg');
            $table->string('results');
            $table->string('resultsChart');
            $table->text('resultsText');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
