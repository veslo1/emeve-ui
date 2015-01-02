'use strict';

/**
 *  Copy application fonts
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

var appSettings = require('./../config.json').appSettings;
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}


gulp.task('font:app', function () {
    return gulp.src(dirDev + 'fonts/**/*.{eot,svg,ttf,woff}')
        .pipe(gulp.dest(dirApp + 'fonts'))
        .pipe($.size());
});
