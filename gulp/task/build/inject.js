'use strict';

/**
 *  Inject script (js) files to index.html(app index page) file
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var dirDev = mvApp.config().dir().dev;

gulp.task('build:inject', ['build:partial'], function () {
  var optionsApp = {
    name: mvApp.config().app().module.name,
    addRootSlash: false,
    ignorePath: [dirDev]
  };
  var sourcesApp = gulp.src(dirDev + 'scripts/**/*.js', {
    read: false
  });

  gulp.src(dirDev + 'index.html')
    .pipe(mvApp.$().print())
    .pipe(mvApp.$().inject(sourcesApp, optionsApp))
    .pipe(gulp.dest(dirDev))
    .pipe(mvApp.reload());
});
