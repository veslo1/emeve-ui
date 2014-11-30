'use strict';

/**
 *  Tarefas comuns
 */
var gulp = require('gulp');

var appSettings = require('./config.json').appSettings;
var dirDev = appSettings.directory.dev; //app

gulp.task('watch', function () {
  gulp.watch('bower.json', ['bower']);
  gulp.watch('module/**/*.{php,phtml}', ['phpView']);
  gulp.watch(dirDev + 'styles/**/*.css', ['styles']);
  gulp.watch(dirDev + 'styles/**/*.scss', ['sass']);
  //gulp.watch(dirDev + 'scripts/**/*.js', ['scripts','jsHint']);
  gulp.watch(dirDev + 'scripts/**/*.js', ['scripts']);
  gulp.watch(dirDev + "views/**/*.html",['ngDirectives']);
  gulp.watch(dirDev + "images/**/*.{gif,png,jpg}",['images']);
});
