'use strict';

/**
 *  Image processing
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirBuild = mvApp.config().dir().build;

//== Imagens: otimização
gulp.task('tool:img', function () {
  return gulp.src([dirDev + 'images/**/*.{png,jpg,gif}'])
    .pipe($.cache.clear())
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(dirBuild + 'images'))
    .pipe($.size());
});
