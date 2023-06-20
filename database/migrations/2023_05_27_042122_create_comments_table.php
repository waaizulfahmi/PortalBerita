<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            // $table->id('id')->primary();
            // $table->string('id_post')->nullable();
            $table->id('id')->unsigned();
            $table->string('slug_post');
            $table->string('username')->nullable();
            $table->longText('comment')->nullable();
            $table->string('sentiment')->nullable();
            $table->timestamps();
         
        });
        // Schema::table('comments', function (Blueprint $table) {
        //     $table->foreign('id_post')->references('id')->on('news')->onDelete('cascade');
         
        // });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
