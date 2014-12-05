'use strict';

/**
 *  Tarefas comuns
 */
var gulp = require('gulp');

var appSettings = require('./config.json').appSettings;
var dirDev = appSettings.directory.dev; //app
var dirDemo = appSettings.directory.demo; //app

gulp.task('watch', function () {
  gulp.watch('bower.json', ['bower']);
  gulp.watch('module/**/*.{php,phtml}', ['phpView']);
  gulp.watch([
    dirDev + 'styles/**/*.css',
    dirDemo + 'styles/**/*.css'
  ], ['styles']);
  gulp.watch([
    dirDev + 'styles/**/*.scss',
    dirDemo + 'styles/**/*.scss'
  ], ['sass']);
  //gulp.watch(dirDev + 'scripts/**/*.js', ['scripts','jsHint']);
  gulp.watch([
    dirDev + 'scripts/**/*.js',
    dirDemo + 'scripts/**/*.js'
  ], ['scripts']);
  gulp.watch(dirDev + "partial/directives/**/*.html",['ngDirectives']);
  gulp.watch(dirDemo + "views/**/*.html",['bs-reload']);
  gulp.watch(dirDev + "images/**/*.{gif,png,jpg}",['images']);
});
