'use strict';

/**
 *  Delete direcory
 */
var mvApp = require('./../index');
mvApp.init();

var gulp = mvApp.gulp,
  $ = mvApp.$(),
  configDir = mvApp.config().dir();

//== JSHint e Scripts
gulp.task('build:script', function () {

  gulp.src([
    configDir.dev + 'scripts/**/!(app)*.js',
    configDir.dev + 'scripts/app.js'
  ])
    .pipe($.concat('mv-ui.js'))
    // .pipe($.ngAnnotate())
    //.pipe($.uglify())
    .pipe(gulp.dest(configDir.app))
    .pipe(mvApp.reload())
    .pipe($.size());

  gulp.src(configDir.demo + 'scripts/**/*.js')
    .pipe($.concat('demo-app.js'))
    //.pipe($.ngAnnotate())
    //.pipe($.uglify())
    .pipe(gulp.dest(configDir.demo))
    .pipe(mvApp.reload())
    .pipe($.size());
});
