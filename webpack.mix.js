const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
    .vue() // Pastikan Vue diproses dengan benar
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
        require("autoprefixer"),
    ])
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js')
            }
        }
    })
    .version(); // Untuk cache busting di produksi

// Aktifkan BrowserSync jika ingin live reload
mix.browserSync('localhost:8000'); // Sesuaikan dengan host proyek Anda
