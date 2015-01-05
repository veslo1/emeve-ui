'use strict';

/**
 * BrowserSync
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;

//#== Inicializa um servidor a partir de um proxy
gulp.task('up', ['watch'], function () {
  this.$().browserSync({
    notify: mvApp.config().server().sync.notify,
    port: mvApp.config().server().sync.port,
    proxy: mvApp.config().server().proxy
  });
});

//#== Inicializa um servidor estático com diretório desenvolvimento
//@todo mudar para diretório de desenvolvimento
gulp.task('server', ['watch'], function () {
  mvApp.initStaticServer([
      mvApp.config().dir().demo,
      mvApp.config().dir().build
    ], [
      'app/*.html',
      'app/fonts/**/*.{otf,eot,svg,ttf,woff}',
      'app/styles/**/*.css',
      '.tmp/styles/**/*.css',
      'app/scripts/**/*.js',
      'app/partials/**/*.html',
      'app/images/**/*'
    ],
    [
      'google chrome'
    ]);
});

//#== Inicializa um servidor a partir do diretório de distribuição
gulp.task('server:dist', [], function () {
  mvApp.initStaticServer(mvApp.config().dir().build);
});
