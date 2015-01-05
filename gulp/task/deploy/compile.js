'use strict';

/**
 *  Compila um aplicativo para ser enviado para o servidor
 */
var mvApp = require('./../../index');
mvApp.init();
var appSettings = mvApp.config().data;
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

gulp.task('deploy:compile-prepare',function(){
    $.del(['tool']);
});

gulp.task('deploy:compile-zf2',function(){
    gulp.src([
        './{config,data,licences,module,www}/**/*',
        './vendor',
        'composer.{phar,json}',
        'init_autoloader.php'
    ]).pipe(gulp.dest('./tool'));
});