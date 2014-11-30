'use strict';

/**
 *  Tarefas comuns
 */
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del']
});

var appSettings = require('./config.json').appSettings;
var dirDev = appSettings.directory.dev; //app
var dirApp = appSettings.directory.app; //www/app

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
};

gulp.task('compile:pre',function(){
  $.del(['build']);
});

gulp.task('compile',function(){
  gulp.src([
    './{config,data,licences,module,www}/**/*',
    './vendor',
    'composer.{phar,json}',
    'init_autoloader.php'
  ]).pipe(gulp.dest('./build'));
});

gulp.task("deploy:ftp",function(){
  return gulp.src('build/**/*')
    .pipe($.ftp({
      host: appSettings.deploy.ftp.host,
      port: appSettings.deploy.ftp.port,
      user: appSettings.deploy.ftp.user,
      pass: appSettings.deploy.ftp.pass,
      remotePath: appSettings.deploy.ftp.remotePath
    }));
});


gulp.task('deploy',['compile:pre','build','compile','deploy:ftp']);
