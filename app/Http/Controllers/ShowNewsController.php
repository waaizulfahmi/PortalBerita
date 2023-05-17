<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ShowNewsController extends Controller
{
    public function show(News $news,  $slug)
    {
        // return $news;
        $tampilkan = $news::where('slug', $slug)->first();
        return Inertia::render('ReadNews/ReadNews', [
            'myNews' => $tampilkan,
            
        ]);
        dd($tampilkan);

        // return route('readnews')->with('tampilkan', $tampilkan);

        // $myNews = $news::where('author', auth()->user()->name)->get();

    }
}
