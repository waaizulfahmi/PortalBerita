<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class ShowNewsController extends Controller
{
    public function show(News $news, $slug)
    {
        $tampilkan = $news::where('slug', $slug)->first();
        return view('readnews')->with('tampilkan', $tampilkan);
    }
}
