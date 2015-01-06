'use strict';

/**
 *  Delete direcories
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();

//#== Limpeza Geral
gulp.task('clean', function () {
  $.del([
    mvApp.config().dir().tmp,
    '.sass-cache'
  ]);
});

//#== Deleta diretório compilado
gulp.task('clean:build', function () {
  $.del([
    mvApp.config().dir().build
  ]);
});
