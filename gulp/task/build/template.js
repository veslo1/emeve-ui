'use strict';

/**
 *  Angular TemplateCache
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var $ = mvApp.$();
var dirDev = mvApp.config().dir().dev;
var dirTmp = mvApp.config().dir().tmp;

gulp.task('build:template', function () {

  var tcOptions = {
    module: mvApp.config().app().module.template,
    standalone: true
  };

  gulp.src(dirDev + 'partials/directives/**/*.html')
    .pipe($.angularTemplatecache(tcOptions))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest(dirDev + 'scripts/'))
    .pipe(mvApp.reload());
});
