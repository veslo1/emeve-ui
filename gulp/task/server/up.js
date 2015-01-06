'use strict';

/**
 * BrowserSync
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;

//#== Inicializa um servidor a partir de um proxy
gulp.task('up', ['watch'], function () {
  mvApp.$().browserSync({
    notify: mvApp.config().server().sync.notify,
    port: mvApp.config().server().sync.port,
    proxy: mvApp.config().server().sync.proxy
  });
});
