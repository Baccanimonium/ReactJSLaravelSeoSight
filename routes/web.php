<?php

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


Route::resource('menu_items', 'MenuItemController');

Route::get('counters/{page?}/{secondPage?}', 'CountersController@index');

Route::resource('prices', 'PricesController');

Route::resource('categories', 'CategoriesController');

Route::resource('slides', 'SlidesController');

Route::resource('clients-company', 'ClientsCompanyController');

Route::get('testimonials/recent/{count}', 'TestimonialsController@resentTestimonials');
Route::resource('testimonials', 'TestimonialsController');

Route::get('blog/recent/{count}', 'BlogController@resentBlogPublications');
Route::resource('blog', 'BlogController');

Route::get('cases/recent/{count}', 'CasesController@recentCases');
Route::resource('cases', 'CasesController', ['only' => [
    'index', 'show'
]]);

Route::get('/get_user', 'Auth\LoginController@getUser');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/logout', 'Auth\LoginController@logout');
Route::post('/reset_password', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/admin/send_invite', 'Auth\InvitesController@store');

Route::get( '/{any}', function () {
    return view('welcome');
})->where('any', '.*');