'use strict';

/**
 *  Sass compiler
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;

//== Node Sass
gulp.task('demo:sass', function () {

  return gulp.src('demo/styles/**/*.scss')
    .pipe($.sass())
    .on('error', mvApp.error.handleError)
    .pipe(gulp.dest('demo/styles/'))
    .pipe($.size());
});

