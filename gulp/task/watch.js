'use strict';

/**
 *  Tarefas comuns
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;

gulp.task('watch', function () {
  //#== Bower
  gulp.watch('bower.json', ['tool:bower']);

  //#== Php Files
  gulp.watch('module/**/*.{php,phtml}', ['tool:bsr']);

  //#== Css
  gulp.watch([
    mvApp.config().dir().dev + 'styles/**/*.css'
  ], [
    'build:style'
  ]);

  //#== Sass
  gulp.watch([
    mvApp.config().dir().dev + 'styles/**/*.scss'
  ], [
    'tool:sass'
  ]);

  //#== Script
  gulp.watch([
    mvApp.config().dir().dev + 'scripts/**/*.js'
  ], [
    'build:script',
    'build:jshint'
  ]);

  //#== Directives in partials
  gulp.watch([
    mvApp.config().dir().dev + "partials/directives/**/*.html"
  ], [
    'build:template'
  ]);

  //#== views *deprecated
  //@todo remover
  gulp.watch([
    mvApp.config().dir().dev + "views/**/*.html"
  ], [
    'bs-reload'
  ]);

  //#== images
  gulp.watch([
    mvApp.config().dir().dev + "images/**/*.{gif,png,jpg}"
  ], [
    'tool:img'
  ]);
});
