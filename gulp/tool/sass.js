'use strict';

/**
 *  Sass compiler
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

//== Node Sass
gulp.task('tool:sass', function () {
    return gulp.src(dirDev + 'styles/**/*.scss')
        .pipe($.sass())
        .on('error', handleError)
        .pipe(gulp.dest(dirDev + 'styles/'))
        .pipe($.size());
});