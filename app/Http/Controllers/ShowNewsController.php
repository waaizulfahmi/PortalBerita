<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;
use App\Models\Comments;
use Inertia\Inertia;


class ShowNewsController extends Controller
{
    public function show(News $news, Comments $comments,  $slug)
    {
        // return $news;
        $post = $news::where('slug', $slug)->first();
        $comment = $comments::get();
        // $post->increment('views');
        $news = new NewsCollection(News::inRandomOrder()->paginate(3));

        $comment = $comments::where('slug_post', $slug)->get();
        // $post = News::find($id);
        // $post::update([
            //     'views' => $post->views + 1
            // ]);
        $count = News::where('slug', $slug)->first();
        $count->views = $count->views + 1;
        $count->save();

        return Inertia::render('ReadNews/ReadNews', [
            'myNews' => $post,
            'recommend' => $news,
            'comments' => $comment
            
        ]);

  

    }

    public function addComment(Request $request, Comments $comment, $slug){
      
        $comment->comment = $request->comment;
        $comment->username = $request->username; 
        $comment->slug_post = $slug;
        $comment->save();
        
        return redirect()->route('read', ['slug' => $slug]);



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
