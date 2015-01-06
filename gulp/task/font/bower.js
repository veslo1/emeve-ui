'use strict';

/**
 *  Copy bower fonts
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirBuild = mvApp.config().dir().build;

gulp.task('font:bower', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest(dirBuild + 'fonts/'))
    .pipe($.size());
});
