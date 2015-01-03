'use strict';

/**
 *  Envia um diretório para o servidor vai FTP
 */
var madeira = require('./../../index');
var appSettings = madeira.config();
var dirDev = appSettings.directory.dev; //app directory development
var dirApp = appSettings.directory.app; //compile directory
var dirDemo = appSettings.directory.demo;

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
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
