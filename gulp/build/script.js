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

//== JSHint e Scripts
gulp.task('build:script', function () {

    gulp.src([
        dirDev + 'scripts/**/!(app)*.js',
        dirDev + 'scripts/app.js'
    ])
        .pipe($.concat('mv-ui.js'))
        // .pipe($.ngAnnotate())
        //.pipe($.uglify())
        .pipe(gulp.dest(dirApp))
        .pipe(reload({stream: true}))
        .pipe($.size());

    gulp.src(dirDemo + 'scripts/**/*.js')
        .pipe($.concat('demo-app.js'))
        //.pipe($.ngAnnotate())
        //.pipe($.uglify())
        .pipe(gulp.dest(dirDemo))
        .pipe(reload({stream: true}))
        .pipe($.size());

});