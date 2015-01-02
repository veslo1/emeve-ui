'use strict';

/**
 *  Inject script (js) files to index.html(app index page) file
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
