'use strict';

/**
 *  Compila um aplicativo para ser enviado para o servidor
 */
var mvApp = require('./../../index');
var gulp = mvApp.gulp;
var dirBuild = mvApp.config().dir().build;

gulp.task('deploy:compile-prepare', function () {
  mvApp.$().del([dirBuild]);
});

gulp.task('deploy:compile-zf2', function () {
  gulp.src([
    './{config,data,licences,module,www}/**/*',
    './vendor',
    'composer.{phar,json}',
    'init_autoloader.php'
  ]).pipe(gulp.dest('./' + dirBuild));
});
