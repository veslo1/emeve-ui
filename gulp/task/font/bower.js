'use strict';

/**
 *  Copy bower fonts
 */
var madeira = require('./../../index');
var appSettings = madeira.getConfig();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});

gulp.task('font:bower', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(dirApp + 'fonts/bower'))
        .pipe($.size());
});
