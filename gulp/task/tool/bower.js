'use strict';

/**
 *  Inject Bower components
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var dirDev = mvApp.config().dir().dev;

//== Wiredep
gulp.task('tool:bower', function () {
  return gulp.src(dirDev + 'index.html')
    .pipe(mvApp.$().wiredep.stream({
      directory: dirDev + 'bower_components',
      ignorePath: dirDev
    }))
    .pipe(gulp.dest(dirDev))
    .pipe(mvApp.reload());
});
