'use strict';

/**
 *  Tarefas comuns
 */
var gulp = require('gulp');

gulp.task('deploy',[
    'deploy:compile-prepare',
    'deploy:compile-zf2',
    'deploy:ftp'
]);
