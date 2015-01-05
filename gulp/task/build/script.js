'use strict';

/**
 *  Delete direcory
 */
var mvApp = require('./../../index');
mvApp.init();

//var appSettings = mvApp.config();
//var mvAp = appSettings.directory.dev; //app directory development
//var mvApp.config().dir().app = appSettings.directory.app; //compile directory
//var dirDemo = appSettings.directory.demo;

var gulp = mvApp.gulp;
var $ = mvApp.$();
console.log(mvApp.config().dir());

//== JSHint e Scripts
gulp.task('build:script', function () {

    gulp.src([
        mvApp.config().dir().dev + 'scripts/**/!(app)*.js',
        mvApp.config().dir().dev + 'scripts/app.js'
    ])
        .pipe($.concat('mv-ui.js'))
        // .pipe($.ngAnnotate())
        //.pipe($.uglify())
        .pipe(gulp.dest(mvApp.config().dir().app))
        .pipe(mvApp.reload())
        .pipe($.size());

    gulp.src(dirDemo + 'scripts/**/*.js')
        .pipe($.concat('demo-app.js'))
        //.pipe($.ngAnnotate())
        //.pipe($.uglify())
        .pipe(gulp.dest(mvApp.config().dir().demo))
        .pipe(mvApp.reload())
        .pipe($.size());
});
