'use strict';

/**
 *  JSHint
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});

var appSettings = require('./../config.json').appSettings;
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}

gulp.task('tool:jshint', function () {
    return gulp.src(dirDev + 'scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size());
});

gulp.task('tool:jshint-gulp', function () {
    return gulp.src('gulp/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size());
});