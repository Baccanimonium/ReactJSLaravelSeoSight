const mix = require('laravel-mix');


// Set up the spritemap plugin

mix.react('resources/assets/js/App.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

