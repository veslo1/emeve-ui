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

var appSettings = require('./../config.json').appSettings;
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;


//#== Limpeza Geral
gulp.task('build:clean', function () {
    $.del(['.tmp', '.sass-cache']);
});

//#==
gulp.task('build:clean-core', function () {
    $.del([dirApp]);
});
