'use strict';

/**
 *  Delete direcory
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}

var appSettings = require('./../config.json').appSettings;
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

gulp.task('build:style', function () {
    return gulp.src(dirDev + 'styles/*.css')
        .pipe($.autoprefixer('last 1 version'))
        .pipe($.minifyCss({keepSpecialComments: 0}))
        .pipe(gulp.dest(dirApp + 'styles/'))
        .pipe(reload({stream: true}))
        .pipe($.size());
});