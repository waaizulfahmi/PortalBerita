<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Http\Controllers\Controller;
use App\Http\Resources\NewsCollection;
use App\Models\Comments;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use PharIo\Manifest\Author;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $topNews = new NewsCollection(News::OrderByDesc('created_at')->paginate(4));
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(12));
        // // dd($news);
        // $news = News::all();
        return Inertia::render('Homepage', [
            'title' => 'PanelWarta.id',
            'description' => "Selamat datang di portal berita",
            'top_news' => $topNews,
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //     $news = News::create(
        //         $request->all()

        //     );
        //     'description' => $request->description,
        //     'category' => $request->category,
        //     'image' => $request->image,

        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->name;
        $news->slug = Str::slug($request->title);
        $news->views = 0;

        // $path = '';
        if ($request->hasFile('image')) {
            $file = $request->file('image')->store('post-images');

        }

        $news->image = $file;

       

        $news->save();
        return redirect()->back()->with('message', 'Berita berhasil dibuat');

        // return response()->json([
        //     'status' => true,
        //     'message' => "Post Created successfully!",
        //     'post' => $news
        // ], 200);
        // return response()->json([
        //     'news' => $news 
        // ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
     
        $myNews = $news::where('author', auth()->user()->name)->get();
        return Inertia::render('DashboardPages/ListPage', [
            'myNews' => $myNews,

        ]);

     
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('DashboardPages/EditNews', [
            'myNews' => $news->find($request->id)
        ]);
        return response()->json([
            'news' => $news
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $setImage = $request->input('image');

        

        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'image' => $request->hasFile('image') ? $request->file('image')->store('post-images') : $setImage, 
            'slug' => Str::slug($request->title),
            'views' => 0
        ]);
        return to_route('my.news')->with('message', 'Updata Berita Berhasil');
        // return response()->json([
        //     'news' => $news 
        // ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, News $news)
    {
        $news = News::find($request->id);
        $news->delete();

        return to_route('my.news')->with('message', 'Data Berhasil Dihapus !');
      
    }

    public function search(Request $request)
    {
        if ($request->has('search')) {
            $newsResult = News::where('author', auth()->user()->name)->where('title', 'LIKE', '%' . $request->search . '%')->get();
        } else {
            $newsResult = News::where('author', auth()->user()->name)->get();
        }
        return Inertia::render('DashboardPages/ListPage', [
            'myNews' => $newsResult,

        ]);
    }

    public function comment( News $news){
        $user = $news::select('author')->where('author',  auth()->user()->name)->get()->pluck('author')->first();
  
        $comment = Comments::join('news', 'comments.slug_post' ,'=', 'news.slug')->where('news.author', '=', $user)->get(['comment', 'username', 'slug_post', 'sentiment', 'id_post']);


        return Inertia::render('DashboardPages/ListComment', [
            'comments' => $comment,
        ]);
    }


    public function delete_comment(Request $request, Comments $comment){
        $comment= Comments::find($request->id_post);
        $comment->delete();

        return to_route('list.comment')->with('message', 'Data Berhasil Dihapus !');

    }

    public function stats () {
        $total_posts = News::count();
        $total_views = News::sum('views');
        $total_author = User::count('id');
        
        return Inertia::render('DashboardPages/Dashboard', [
            'total_post' => $total_posts,
            'total_views' => $total_views,
            'total_author' => $total_author,

        ]);
    }
}
