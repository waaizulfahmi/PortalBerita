<?php

namespace Database\Seeders;

use App\Models\News;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Testing\Fakes\Fake;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /** 
     * Run the database seeds.
     */
    public function run()
    {
        News::factory(50)->create();
    }
}
 