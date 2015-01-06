'use strict';

/**
 *  Replaces references to non-optimized scripts or stylesheets into a set of HTML files
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirTmp = mvApp.config().dir().tmp;

gulp.task('build:reference', function () {
  return gulp.src('./' + dirDev + 'index.html')
    .pipe($.usemin({
      css: [
        $.minifyCss(),
        $.autoprefixer('last 1 version'),
        $.csso()
      ],
      html: [
        $.minifyHtml({empty: true})
      ],
      js: [
        $.ngAnnotate(),
        $.uglify()
      ]
    }))
    .pipe(gulp.dest(dirTmp))
    .pipe(mvApp.reload());
});
