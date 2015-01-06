'use strict';

/**
 *  BrowserSync
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;

//#== BrowserSync Reload
gulp.task('tool:bsr', function () {
    gulp.src('app/index.html', {read: false})
        .pipe(mvApp.reload());
});
