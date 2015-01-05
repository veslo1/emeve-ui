'use strict';

/**
 *  Inject Bower components
 */
var mvApp = require('./../../index');
mvApp.init();
var appSettings = mvApp.config().get();
console.log(appSettings);
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files']
});

//== Wiredep
gulp.task('tool:bower', function () {
  return gulp.src(dirDev + 'index.html')
    .pipe(wiredep({
      directory: dirDev + 'bower_components',
      ignorePath: dirDev
    }))
    .pipe(gulp.dest(dirDev))
    .pipe(reload({stream: true}));
});