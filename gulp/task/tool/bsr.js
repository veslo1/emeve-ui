'use strict';

/**
 *  BrowserSync
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
    pattern: ['gulp-*', 'main-bower-files']
});

//#== BrowserSync Reload
gulp.task('tool:bsr', function () {
    gulp.src('app/index.html', {read: false})
        .pipe(reload({stream: true}));
});
