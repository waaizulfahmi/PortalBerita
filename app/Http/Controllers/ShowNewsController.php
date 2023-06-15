<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;
use App\Models\Comments;
use Inertia\Inertia;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;


class ShowNewsController extends Controller
{
    public function show(News $news, Comments $comments,  $slug)
    {
        // return $news;
        $post = $news::where('slug', $slug)->first();
        $cat = $news::select('category')->where('slug', $slug)->pluck('category');
        // dd($cat);
        $comment = $comments::get();
        // $post->increment('views');
        $news_recommend  = new NewsCollection(News::where('category', $cat)->inRandomOrder()->paginate(3));

        $comment = $comments::where('slug_post', $slug)->get();
        // $post = News::find($id);
        // $post::update([
            //     'views' => $post->views + 1
            // ]);
        $count = News::where('slug', $slug)->first();
        $count->views = $count->views + 1;
        $count->save();

        // COUNT CATEGORY 
        $total_category = [];
        $total_news = News::where('category', 'Berita')->count();
        $total_sport = News::where('category', 'Olahraga')->count();
        $total_wisata = News::where('category', 'Wisata')->count();
        $total_kuliner = News::where('category', 'Kuliner')->count();
        $total_bisnis = News::where('category', 'Bisnis')->count();
        $total_profile = News::where('category', 'Profile')->count();
        $total_nasional = News::where('category', 'Nasional')->count();
        $total_mancanegara = News::where('category', 'Mancanegara')->count();

        // TRENDS 
        $date = \Carbon\Carbon::today()->subDays(30);

        $trends = News::where('created_at','>=',$date)->OrderByDesc('views')->get();
        // dd($trends);

        $total_category = array( 
             'Berita' => $total_news, 
             'Olahraga' => $total_sport,
             'Wisata' => $total_wisata,
             'Kuliner' => $total_kuliner, 
             'Bisnis' =>$total_bisnis, 
             'Profile' =>$total_profile, 
             'Nasional' => $total_nasional, 
             'Mancanegara' => $total_mancanegara,
        );

        arsort($total_category, SORT_NUMERIC);

        

        return Inertia::render('ReadNews/ReadNews', [
            'myNews' => $post,
            'recommend' => $news_recommend,
            'comments' => $comment, 
            'total_category' => $total_category,   
            'trends' => $trends     
        ]);

  

    }

    public function addComment(Request $request, Comments $comment, $slug){

        // SENTIMENT ANALYZER
        $text = $request->comment;
        $command = escapeshellcmd("py F:/PROJECT/portal-berita/app/Http/Controllers/sentimen/project-capstone/app.py $text" );
        $output = shell_exec($command);
        // dd($output);


        // $process = new Process(['python3 F:/PROJECT/portal-berita/app/Http/Controllers/app.py']);
        // $process->run();

        // // executes after the command finishes
        // if (!$process->isSuccessful()) {
        //     throw new ProcessFailedException($process); 
        // }

        // $data = $process->getOutput();

        // dd($data);


        $comment->comment = $request->comment;
        $comment->username = $request->username; 
        $comment->sentiment = $output;
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
        $showCategoryTotal = $news::where('category', $category)->count();
        
        // dd($showCategory);
        return Inertia::render('ShowNews/ShowNews', [
            'title' =>  "Kategori " . $category ,
            'description' => "Selamat datang di portal berita",
            'news' => $showCategory,
            'total_cat' => $showCategoryTotal

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
            $newsResultTotal = News::where('title', 'LIKE', '%'.$request->search.'%')->count();
        }
        else{
            $newsResult = News::all();
        }
        $mencari = "Pencarian ";
        return Inertia::render('ShowNews/ShowNews', [
            'title' => $mencari.$request->search,
            'news' => $newsResult,
            'newsTotal' => $newsResultTotal

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
