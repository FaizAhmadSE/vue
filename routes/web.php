<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/projects/create', 'ProjectController@create');
Route::post('/projects/store', 'ProjectController@store');
