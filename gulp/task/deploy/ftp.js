'use strict';

/**
 *  Envia um diretório para o servidor vai FTP
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var cDeploy = mvApp.config().deploy();
var dirBuild = mvApp.config().dir().build;

gulp.task("deploy:ftp", function () {
  return gulp.src(dirBuild + '/**/*')
    .pipe($.ftp({
      host: cDeploy.ftp.host,
      port: cDeploy.ftp.port,
      user: cDeploy.ftp.user,
      pass: cDeploy.ftp.pass,
      remotePath: cDeploy.ftp.remotePath
    }));
});
