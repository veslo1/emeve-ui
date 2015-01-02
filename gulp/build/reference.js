'use strict';

/**
 *  Replaces references to non-optimized scripts or stylesheets into a set of HTML files
 *  @packages gulp-usemin; gulp-ng-annotate; gulp-uglify; gulp-autoprefixer; gulp-csso; gulp-minify-css;
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;

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