'use strict';

/**
 *  Sass compiler
 */
var madeira = require('./../../index');
var appSettings = madeira.config();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

//== Node Sass
gulp.task('tool:sass', function () {
    browserSync.notify("Sass...");
    return gulp.src(dirDev + 'styles/**/*.scss')
        .pipe($.sass())
        .on('error', madeira.error.handleError)
        .pipe(gulp.dest(dirDev + 'styles/'))
        .pipe($.size());
});
