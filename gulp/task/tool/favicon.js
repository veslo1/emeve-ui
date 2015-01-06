'use strict';

/**
 *  Tarefas comuns
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirBuild = mvApp.config().dir().build;

gulp.task('tool:favicon', function (callbackFnc) {
  mvApp.$().favicons({
        source: {
            small: dirDev + 'favicon/64x64.png',    // Should be 64x64px or smaller
            medium: dirDev + 'favicon/256x256.png',  // Should be between 65x65px to 310x310px
            large: dirDev + 'favicon/500x500.png'     // Should be 311x311px or larger
        },
        dest: dirBuild + '/images/favicon/',

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
