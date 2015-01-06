'use strict';

/**
 *  Comprime os partials em um arquivo templates.js
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirTmp = mvApp.config().dir().tmp;

//== Partials angular folder
gulp.task('build:partial', function () {
  return gulp.src(dirDev + 'partials/**/*.html')
    .pipe($.angularHtmlify())
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: mvApp.config().app().module.name,
      prefix: 'partials/'
    }))
    .pipe($.concat('scripts/templates.js'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest(dirTmp))
    .pipe($.size());
});
