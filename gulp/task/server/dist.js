'use strict';

/**
 * BrowserSync: build directory
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;

//#== Inicializa um servidor a partir do diretório de distribuição
gulp.task('server:dist', [], function () {
  mvApp.initStaticServer(
    mvApp.config().dir().build
  );
});
