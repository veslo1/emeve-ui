'use strict';

/**
 *  Tarefas comuns
 */
var madeira = require('./../index');
var appSettings = madeira.config();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');

gulp.task('watch', function () {
  //#== Bower
  gulp.watch('bower.json', ['tool:bower']);

  //#== Php Files
  gulp.watch('module/**/*.{php,phtml}', ['tool:bsr']);

  //#== Css
  gulp.watch([
      dirDev + 'styles/**/*.css',
      dirDemo + 'styles/**/*.css'
    ], [
      'build:style']
  );

  //#== Sass
  gulp.watch([
    dirDev + 'styles/**/*.scss',
    dirDemo + 'styles/**/*.scss'
  ], [
    'tool:sass'
  ]);

  //#== Script
  gulp.watch([
    dirDev + 'scripts/**/*.js',
    dirDemo + 'scripts/**/*.js'
  ], [
    'build:script'
    //'build:jshint'
  ]);

  //#== Directives in partials
  gulp.watch(dirDev + "partials/directives/**/*.html", [
    'build:template'
  ]);

  //#== views *deprecated
  gulp.watch(dirDemo + "views/**/*.html", [
    'bs-reload'
  ]);

  //#== images
  gulp.watch(dirDev + "images/**/*.{gif,png,jpg}", [
    'tool:img'
  ]);
});
