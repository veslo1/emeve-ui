'use strict';

/**
 *  Copy application fonts
 */
var mvApp = require('./../../index');
mvApp.init();

var appSettings = mvApp.config();

var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

gulp.task('font:app', function () {
    return gulp.src(dirDev + 'fonts/**/*.{eot,svg,ttf,woff}')
        .pipe(gulp.dest(dirApp + 'fonts'))
        .pipe($.size());
});
