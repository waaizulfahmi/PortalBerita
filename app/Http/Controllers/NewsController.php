<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Http\Controllers\Controller;
use App\Http\Resources\NewsCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(5));
        // // dd($news);
        // $news = News::all();
        return Inertia::render('Homepage', [
            'title' => 'PanelWarta.id',
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

        // $path = '';
        if($request->hasFile('image')) {
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
        // $slug = $news->slug;
        $myNews = $news::where('author', auth()->user()->name)->get();
        return Inertia::render('DashboardPages/ListPage', [
            'myNews' => $myNews,

        ]);

        // $showNews = $news::where('slug', $slug)->first();
        // return Inertia::render('ReadNews/Read', [
        //     'myNews' => $showNews,
        // ]);
        // return response()->json([
        //     'news' => $news 
        // ]);
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
        // dd($setImage);
    //   dd($news::where('image', $request->input('image'))->first());
        

        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'image' => $request->hasFile('image') ? $request->file('image')->store('post-images') : $setImage, 
            'slug' => Str::slug($request->title)
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
        // return response()->json([
        //     'status' => true,
        //     'message' => "Post Deleted successfully!",
        // ], 200);
        // $news = News::find($request->id);
        // $news->delete();
        // return response()->json([
        //     'news' => $news ```````````````````````````
        // ]);
    }


     public function search(Request $request){
        if($request->has('search')){
            $newsResult = News::where('author', auth()->user()->name)->where('title', 'LIKE', '%'.$request->search.'%')->get();
        }
        else{
            $newsResult = News::where('author', auth()->user()->name)->get();
        }
        return Inertia::render('DashboardPages/ListPage', [
            'myNews' => $newsResult,

        ]);

     }
}
