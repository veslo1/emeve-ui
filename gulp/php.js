'use strict';

/**
 *  Tarefas comuns
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del']
});

//== Regarega após para edição no servidor PHP
gulp.task('phpView', function () {
  return gulp.src('www/index.php', {read: false})
    .pipe(reload({stream: true}));
});

