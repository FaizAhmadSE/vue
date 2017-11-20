<!doctype html>
<html lang="en">
<head>
    <title>Hello, world!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
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

<script src="../../node_modules/axios/dist/axios.js"></script>
<script src="../../node_modules/vue/dist/vue.js"></script>
<script src="/public/js/app.js"></script>
</body>
</html>