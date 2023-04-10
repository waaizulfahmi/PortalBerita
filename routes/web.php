<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Faker\Provider\ar_EG\Internet;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::inertia('/ShowNews', 'ShowNews');
Route::get('/readnews', function () {
    return Inertia::render('ReadNews/ReadNews');
})->name('readnews');

Route::get('/shownews', function () {
    return Inertia::render('ShowNews/ShowNews');
})->name('shownews');

// ROUTE DASHBOARD
// Route::get('/news/post', [NewsController::class, 'show'])->middleware(['auth', 'verified']);
Route::get('/', [NewsController::class, 'index']);
Route::post('/dashboard/post', [NewsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');
Route::get('/dashboard/list/show', [NewsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.news');
Route::get('/dashboard/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.news');
Route::post('/dashboard/update', [NewsController::class, 'update'])->middleware(['auth', 'verified'])->name('update.news');
Route::post('/dashboard/delete', [NewsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.news');

// dashboardPages
// Route::get('/dashboard', function () {
//     return Inertia::render('DashboardPages/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard', function () {
    return Inertia::render('DashboardPages/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardpage');

Route::get('/dashboard/post/new', function () {
    return Inertia::render('DashboardPages/PostPage');
})->middleware(['auth', 'verified'])->name('postpage');


Route::get('/dashboard/list', function () {
    return Inertia::render('DashboardPages/ListPage');
})->middleware(['auth', 'verified'])->name('listpage');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
