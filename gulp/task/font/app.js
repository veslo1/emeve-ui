'use strict';

/**
 *  Copy application fonts
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var dirDev = mvApp.config().dir().dev;
var dirBuild = mvApp.config().dir().build;

gulp.task('font:app', function () {
  return gulp.src(dirDev + 'fonts/**/*.{eot,svg,ttf,woff}')
    .pipe(gulp.dest(dirBuild + 'fonts'))
    .pipe(mvApp.$().size());
});
