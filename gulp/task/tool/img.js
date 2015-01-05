'use strict';

/**
 *  Image processing
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
var wiredep = require('wiredep').stream;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

//== Imagens: otimização
gulp.task('tool:img', function () {
    return gulp.src(dirDev + 'images/**/*.{png,jpg,gif}')
        .pipe($.cache.clear())
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(dirApp + 'images'))
        .pipe($.size());
});
