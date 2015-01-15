'use strict';

/**
 *  Tarefas comuns
 */
var mvApp = require('./../index');
var gulp = mvApp.gulp;
var dirDev = mvApp.config().dir().dev;

gulp.task('watch', function () {

  //#== Bower
  gulp.watch('bower.json', ['tool:bower']);

  //#== Css
  gulp.watch(dirDev + 'styles/**/*.css', ['build:style']);

  //#== Sass
  gulp.watch(dirDev + 'styles/**/*.scss', ['tool:sass']);

  //#== Script
  gulp.watch(dirDev + 'scripts/**/*.js',['build:script','tool:jshint']);

  //#== images
  gulp.watch([dirDev + "images/**/*.{gif,png,jpg}"], ['tool:img']);

  //#== Directives in partials
  gulp.watch(dirDev + "partials/**/*.html", ['build:template']);

  //#== Demo
  gulp.watch("demo/styles/**/*.scss", ['demo:sass']);

  //#== Browser upload
  gulp.watch([
    'module/**/*.{php,phtml}',
    'demo/scripts/**/*.js',
    'demo/styles/**/*.css',
    'demo/**/*.html'
  ], [
    'tool:bsr'
  ]);
});
