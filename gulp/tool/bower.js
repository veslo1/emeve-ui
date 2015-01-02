'use strict';

/**
 *  Inject Bower components
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