'use strict';

/**
 *  Envia um diretório para o servidor vai FTP
 */
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

var appSettings = require('./../config.json').appSettings;
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
};

gulp.task('deploy:prepare',function(){
    //@todo mudar para diretório dist
    $.del(['tool']);
});

gulp.task("deploy:ftp",function(){
    //@todo mudar para diretório dist
    return gulp.src('tool/**/*')
        .pipe($.ftp({
            host: appSettings.deploy.ftp.host,
            port: appSettings.deploy.ftp.port,
            user: appSettings.deploy.ftp.user,
            pass: appSettings.deploy.ftp.pass,
            remotePath: appSettings.deploy.ftp.remotePath
        }));
});
