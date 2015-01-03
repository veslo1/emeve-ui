'use strict';

/**
 *  Tarefas comuns
 */
var gulp = require('gulp');

gulp.task('build', [
    'tool:bower',
    'build:style',
    'build:inject',
    'build:reference',
    'tool:images',
    'font'
]);
