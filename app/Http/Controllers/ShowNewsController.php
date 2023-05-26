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
        $news = new NewsCollection(News::inRandomOrder()->paginate(3));

        return Inertia::render('ReadNews/ReadNews', [
            'myNews' => $tampilkan,
            'recommend' => $news
            
        ]);
        dd($tampilkan);

    // return route('readnews')->with('tampilkan', $tampilkan);

        // $myNews = $news::where('author', auth()->user()->name)->get();

    }
    public function index(News $news, $category)
    {
        // $showCategory = new NewsCollection(News::OrderByDesc('category', $category)->paginate(10));
        // // dd($news);
        // $news = News::all();
        $showCategory = $news::where('category', $category)->orderByDesc('id')->get();
        
        // dd($showCategory);
        return Inertia::render('ShowNews/ShowNews', [
            'title' =>  $category ,
            'description' => "Selamat datang di portal berita",
            'news' => $showCategory,

        ]);

        return response()->json([
            'status' => true,
            'news' => $news
        ]);
        // return response()->json([
        //     'news' => $news 
        // ]);
    }

   public function search(Request $request){
        if($request->has('search')){
            $newsResult = News::where('title', 'LIKE', '%'.$request->search.'%')->get();
        }
        else{
            $newsResult = News::all();
        }
        $mencari = "Mencari ";
        return Inertia::render('ShowNews/ShowNews', [
            'title' => $mencari.$request->search,
            'news' => $newsResult,

        ]);

     }
   public function count(){
        $count = News::table('')->count();
        return Inertia::render('DashboardPages/Dashboard', [
            'artikel' => $count,
        ]);

     }

   public function recommend(){
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(3));
        // // dd($news);
        // $news = News::all();
        return Inertia::render('ReadNews/BeritaRekomendasi', [
            'title' => 'PanelWarta.id',
            'description' => "Selamat datang di portal berita",
            'myNews' => $news,

        ]);


     }
}
