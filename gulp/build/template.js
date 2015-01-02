'use strict';

/**
 *  Angular TemplateCache
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

gulp.task('build:template', function () {
    var tcOptions = {
        module: 'mvUi.Template',
        standalone:true
    };
    gulp.src(dirDev + 'partials/directives/**/*.html')
        .pipe($.angularTemplatecache(tcOptions))
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(gulp.dest(dirDev + 'scripts/'))
        .pipe(browserSync.reload({stream: true}));
});
