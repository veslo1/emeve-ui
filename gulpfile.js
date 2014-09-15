var gulp  = require('gulp');

var concat = require('gulp-concat');
var compass = require('gulp-compass');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('scripts', function(){
  gulp.src('./html/script/**/*.js')
  .pipe(concat('./dist'))
  .pipe(rename('app.js'))
  .pipe(gulp.dest('./dist'));
});


gulp.task('style', function(){
  gulp.src('./html/script/**/*.js')
  .pipe(concat('./dist'))
  .pipe(rename('app.js'))
  .pipe(gulp.dest('./dist/script'));
});
