var gulp        = require('gulp');
var concat      = require('gulp-concat');
var jshint      = require('gulp-jshint');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

//== Development
// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync({
    browser:["google chrome", "firefox"],
    server: {
      baseDir: "./html"
    },
    port: 8002
  });
});

// process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src('js/*js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
  return gulp.src('html/style/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('html/style'))
    .pipe(reload({stream:true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("html/style/*.scss", ['sass']);
  gulp.watch("js/*.js", ['js', browserSync.reload]);
});
