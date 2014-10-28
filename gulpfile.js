/**
 * Gulp
 * @author Marcus Vinícius da R G Cardoso <marcusvy@gmail.com>
 */
var gulp        = require('gulp');
//server
var browserSync = require('browser-sync');
//basic
var concat      = require('gulp-concat');
var inject      = require('gulp-inject');
var jshint      = require('gulp-jshint');
var minifyCSS   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var wiredep     = require('wiredep').stream;
//debug
var print       = require('gulp-print');
var using       = require('gulp-using');

/**
 * Development
 */
//Browser-sync
gulp.task('browser-sync', function () {
  browserSync({
    notify:false,
    browser: ["google chrome"],
    server: {
      baseDir: "./html"
    }
  });
});

//Process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src('js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

//Sass
gulp.task('sass', function () {
  return gulp.src('html/style/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS({keepSpecialComments:0}))
    .pipe(gulp.dest('html/style'))
    .pipe(browserSync.reload({stream: true}));
});

//Style
gulp.task('style', function () {
  return gulp.src('html/style/**/*.css')
    .pipe(minifyCSS({keepSpecialComments:0}))
    .pipe(gulp.dest('html/style'))
    .pipe(browserSync.reload({stream: true}));
});



//Wiredep
gulp.task('bower', function () {
  gulp.src('html/index.html')
    .pipe(wiredep({
      directory: 'html/bower_components',
      ignorePath: 'html/'
    }))
    .pipe(gulp.dest('html'))
    .pipe(browserSync.reload({stream: true}));
});

//Injeção do aplicativo no index.html
gulp.task('angularApp', function () {
  var sources = gulp.src(['html/script/**/*.js'], {
    read: false
  });

  var options = {
    name: 'angularApp',
    addRootSlash: false,
    ignorePath: 'html'
  };

  return gulp.src('html/index.html')
    .pipe(inject(sources,options))
    .pipe(gulp.dest('html'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('bs-reload',function(){
  gulp.src('html/index.html')
    .pipe(browserSync.reload({stream: true}));
});
//Default
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("html/style/*.scss", ['sass']);
  gulp.watch("html/style/*.css", ['style']);
  gulp.watch("html/js/*.js", ['js','angularApp', 'bs-reload']);
  gulp.watch("html/**/*.html", ['bs-reload']);
});
