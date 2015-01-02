'use strict';

/**
 *  Estilização CSS
 */
var madeira = require('./../../index');
var appSettings = madeira.getConfig();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

gulp.task('build:style', function () {
    return gulp.src(dirDev + 'styles/*.css')
        .pipe($.autoprefixer('last 1 version'))
        .pipe($.minifyCss({keepSpecialComments: 0}))
        .pipe(gulp.dest(dirApp + 'styles/'))
        .pipe(reload({stream: true}))
        .pipe($.size());
});
