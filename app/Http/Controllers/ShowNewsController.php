<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;

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
    public function index()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(5));
        // // dd($news);
        // $news = News::all();
        return Inertia::render('ShowNews/ShowNews', [
            'title' => 'Category',
            'description' => "Selamat datang di portal berita",
            'news' => $news,

        ]);

        return response()->json([
            'status' => true,
            'news' => $news
        ]);
        // return response()->json([
        //     'news' => $news 
        // ]);
    }
}
