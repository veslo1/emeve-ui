'use strict';

/**
 * BrowserSync
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;
var dirDev = mvApp.config().dir().dev;
var dirTmp = mvApp.config().dir().tmp;

//#== Inicializa um servidor estático com diretório desenvolvimento
gulp.task('server', ['watch'], function () {
  mvApp.initStaticServer([
      dirDev,
      dirTmp
    ], [
      dirDev + '*.html',
      dirDev + 'fonts/**/*.{otf,eot,svg,ttf,woff}',
      dirDev + 'styles/**/*.css',
      dirTmp + 'styles/**/*.css',
      dirDev + 'scripts/**/*.js',
      dirTmp + 'scripts/**/*.js',
      dirDev + 'partials/**/*.html',
      dirDev + 'images/**/*'
    ],
    mvApp.config().server().browser
  );
});
