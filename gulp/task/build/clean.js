'use strict';

/**
 *  Delete direcories
 */
var mvApp = require('./../../index');
mvApp.init();
var appSettings = mvApp.config();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

//#== Limpeza Geral
gulp.task('build:clean', function () {
    $.del(['.tmp', '.sass-cache']);
});

//#== Deleta diretório compilado
gulp.task('build:clean-core', function () {
    $.del([dirApp]);
});
