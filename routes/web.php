<?php

Route::get('/', function () {
    return view('welcome');
});

Route::post('/skills', function() {
    return ['Laravel', 'Vue', 'PHP', 'JavaScript'];
});
