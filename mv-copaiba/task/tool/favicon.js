'use strict';

/**
 *  Tarefas comuns
 */
var madeira = require('./../../index');
var appSettings = madeira.config();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*','favicons']
});

gulp.task('tool:favicon', function (callbackFnc) {
    $.favicons({
        // I/O
        source: {
            small: dirDev + 'favicon/64x64.png',    // Should be 64x64px or smaller
            medium: dirDev + 'favicon/256x256.png',  // Should be between 65x65px to 310x310px
            large: dirDev + 'favicon/500x500.png'     // Should be 311x311px or larger
        },
        dest: dirApp + 'favicon/images',

        // Icon Types
        android: true,
        apple: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        windows: true,

        // Miscellaneous
        html: null,
        background: 'transparent',
        tileBlackWhite: false,
        manifest: null,
        trueColor: false,
        url: null,
        logging: true,
        callback: callbackFnc
    });
});
