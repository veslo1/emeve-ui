'use strict';

/**
 *  Angular TemplateCache
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
    pattern: ['gulp-*']
});

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
