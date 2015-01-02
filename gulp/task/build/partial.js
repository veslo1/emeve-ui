'use strict';

/**
 *  Comprime os partials em um arquivo templates.js
 */
var madeira = require('./../../index');
var appSettings = madeira.getConfig();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del']
});

//== partials
gulp.task('build:partial', function () {
  return gulp.src(dirDev + 'partials/**/*.html')
    .pipe($.angularHtmlify())
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: appSettings.moduleName,
      prefix: 'partials/'
    }))
    .pipe($.concat('scripts/templates.js'))
    .pipe($.ngAnnotate())
    // .pipe($.uglify())
    .pipe(gulp.dest(dirDev))
    .pipe($.size());
});
