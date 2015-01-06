'use strict';

/**
 * BrowserSync
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;

//#== Inicializa um servidor estático com diretório desenvolvimento
gulp.task('server', ['watch'], function () {
  mvApp.initStaticServer([
      mvApp.config().dir().dev,
      'demo/',
      mvApp.config().dir().tmp
    ], [
      'app/*.html',
      'app/fonts/**/*.{otf,eot,svg,ttf,woff}',
      'app/styles/**/*.css',
      '.tmp/styles/**/*.css',
      'app/scripts/**/*.js',
      'app/partials/**/*.html',
      'app/images/**/*'
    ],
    mvApp.config().server().browser
  );
});
