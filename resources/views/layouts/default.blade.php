<!doctype html>
<html lang="en">
<head>
    <title>Hello, world!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="/css/app.css">
    <style>
        body {
            padding-top: 25px;
        }
    </style>
</head>
<body>

<div id="app" class="container">
    @yield ('content')
</div>

<script src="/js/app.js"></script>
</body>
</html>