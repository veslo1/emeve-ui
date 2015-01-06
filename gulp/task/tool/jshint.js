'use strict';

/**
 *  JSHint
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();

gulp.task('tool:jshint', function () {
    return gulp.src(mvApp.config().dir().dev + 'scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size());
});

gulp.task('tool:jshint-gulp', function () {
    return gulp.src('gulp/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size());
});
