<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <h1>Vue und Laravel</h1>
        <div id="app">
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
            </ul>
        </div>

        <script src="../../node_modules/vue/dist/vue.js"></script>
        <script src="../../node_modules/axios/dist/axios.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>
