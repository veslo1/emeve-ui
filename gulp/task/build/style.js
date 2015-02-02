'use strict';

/**
 *  Estilização CSS
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirTmp = mvApp.config().dir().tmp;
var dirBuild = mvApp.config().dir().build;

gulp.task('build:style', function () {

  var minifyCssOptions = {
    keepSpecialComments: 0
  };

  gulp.src(dirDev + 'styles/*.css')
    .pipe($.autoprefixer('last 1 version'))
    .pipe($.minifyCss(minifyCssOptions))
    .pipe(gulp.dest(dirTmp + 'styles/'))
    .pipe(mvApp.reload());

  return gulp.src(dirTmp + 'styles/main.css')
    .pipe($.rename('mv-ui.css'))
    .pipe(gulp.dest(dirBuild))
    .pipe($.size());
});

