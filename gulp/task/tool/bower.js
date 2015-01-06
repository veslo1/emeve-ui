'use strict';

/**
 *  Inject Bower components
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;

//== Wiredep
gulp.task('tool:bower', function () {
  return gulp.src(mvApp.config().dir().dev + 'index.html')
    .pipe(mvApp.$().wiredep.stream({
      directory: mvApp.config().dir().dev + 'bower_components',
      ignorePath: mvApp.config().dir().dev
    }))
    .pipe(gulp.dest(mvApp.config().dir().dev))
    .pipe(mvApp.reload());
});
