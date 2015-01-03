'use strict';

/**
 *  Replaces references to non-optimized scripts or stylesheets into a set of HTML files
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

gulp.task('build:reference', function () {
    return gulp.src('./' + dirDev + 'index.html')
        .pipe($.usemin({
            css: [$.minifyCss(), $.autoprefixer('last 1 version'), $.csso()],
            //html: [minifyHtml({empty: true})],
            js: [$.ngAnnotate(), $.uglify()]
        }))
        .pipe(gulp.dest(dirApp))
        .pipe(reload({stream: true}));
});
