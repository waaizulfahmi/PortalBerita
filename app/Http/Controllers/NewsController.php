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
            'title' => 'Portal Berita',
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
            // Get the Image Name
            // $fileName = $file->getClientOriginalName().'.'.$file->getClientOriginalExtension();
            // // Set the Filepath
            // $path = 'uploads/'.$fileName;
            // // Move the file to the upload Folder
            // $file = $file->move($path, $fileName);
            // dd($path);
        }

        // $news->image = time().'.'.$request->file->extension(); 
        // $request->file->move(public_path('uploads'), $news->image);

        // $fileName = time().'.'.$request->file->extension();  
        //  = $request->file('images'); 
        // $news->image = $request->image->store('public/images');
        // $fileName = $news->image->getClientOriginalName();
        // $finalName = date('His') . $fileName;

        // $request->file('image')->storeAs('images/', $finalName, 'public');

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
        // return Inertia::render()
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
        // $news->update($request->all());

        // return response()->json([
        //     'status' => true,
        //     'message' => "Post Updated successfully!",
        //     'post' => $news
        // ], 200);
        // if($request->hasFile('image')) {
        //     $file = $request->file('image')->store('post-images');
        //     // Get the Image Name
        //     // $fileName = $file->getClientOriginalName().'.'.$file->getClientOriginalExtension();
        //     // // Set the Filepath
        //     // $path = 'uploads/'.$fileName;
        //     // // Move the file to the upload Folder
        //     // $file = $file->move($path, $fileName);
        //     // dd($path);
        // }

        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'image' => $request->file('image')->store('post-images'), 
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
        //     'news' => $news 
        // ]);
    }
}
