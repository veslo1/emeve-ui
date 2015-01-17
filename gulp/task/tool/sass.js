'use strict';

/**
 *  Sass compiler
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;

//== Node Sass
gulp.task('tool:sass', function () {
  mvApp.$().browserSync.notify("Sass...");

  return gulp.src(dirDev + 'styles/**/*.scss')
    .pipe($.sass())
    .on('error', mvApp.error().handleError)
    .pipe(gulp.dest(dirDev + 'styles/'))
    .pipe($.size());
});
