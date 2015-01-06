'use strict';

/**
 *  Delete direcory
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirBuild = mvApp.config().dir().build;

//== JSHint e Scripts
gulp.task('build:script', function () {

  gulp.src([
    dirDev + 'scripts/**/!(app)*.js',
    dirDev + 'scripts/app.js'
  ])
    .pipe($.concat('mv-ui.js'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest(dirBuild))
    .pipe($.size());

  //gulp.src(cDir.demo + 'scripts/**/*.js')
  //  .pipe($.concat('demo-app.js'))
  //  .pipe($.ngAnnotate())
  //  .pipe($.uglify())
  //  .pipe(gulp.dest(dirBuild))
  //  .pipe(mvApp.reload())
  //  .pipe($.size());
});
