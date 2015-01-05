'use strict';

/**
 *  Inject script (js) files to index.html(app index page) file
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
    pattern: ['gulp-*', 'del']
});

gulp.task('build:inject', ['partials'], function () {
    var optionsApp = {
        name: 'mvApp',
        addRootSlash: false,
        ignorePath: [dirDev]
    };
    var sourcesApp = gulp.src(dirDev + 'scripts/**/*.js', {
        read: false
    }).pipe($.print());


    gulp.src(dirDev + 'index.html')
        .pipe($.inject(sourcesApp, optionsApp))
        .pipe(gulp.dest(dirDev))
        .pipe(reload({stream: true}));
});
