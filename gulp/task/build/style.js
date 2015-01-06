'use strict';

/**
 *  Estilização CSS
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirTmp = mvApp.config().dir().tmp;

gulp.task('build:style', function () {

  var minifyCssOptions = {
    keepSpecialComments: 0
  };

  return gulp.src(dirDev + 'styles/*.css')
    .pipe($.autoprefixer('last 1 version'))
    .pipe($.minifyCss(minifyCssOptions))
    .pipe(gulp.dest(dirTmp + 'styles/'))
    .pipe(mvApp.reload())
    .pipe($.size());
});
