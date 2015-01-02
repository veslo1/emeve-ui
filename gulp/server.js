'use strict';

/**
 * Gulp
 * @author Marcus Vinícius da R G Cardoso <marcusvy@gmail.com>
 */
var gulp = require('gulp');
var httpProxy = require('http-proxy');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var appSettings = require('./config.json').appSettings;

var proxy = httpProxy.createProxyServer({
  target: appSettings.server.proxy
});


/* proxyMiddleware forwards static file requests to BrowserSync server
 and forwards dynamic requests to your real backend */
function proxyMiddleware(req, res, next) {
  if (/\.(html|css|js|png|jpg|jpeg|gif|ico|xml|rss|txt|eot|svg|ttf|woff)(\?((r|v|rel|rev)=[\-\.\w]*)?)?$/.test(req.url)) {
    next();
  } else {
    proxy.web(req, res);
  }
}

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    port: appSettings.server.sync.port,
    server: {
      baseDir: baseDir,
      middleware: proxyMiddleware
    },
    browser: browser
  });
}

//#== Inicializa um servidor a partir de um proxy
gulp.task('up',['watch'],function () {
  browserSync({
    notify:appSettings.server.sync.notify,
    port: appSettings.server.sync.port,
    proxy: appSettings.server.proxy
  });
});

//#== Inicializa um servidor do zero para aplicação HTML
gulp.task('server', ['watch'], function () {
  browserSyncInit([
    appSettings.directory.demo,
    appSettings.directory.build,
    appSettings.directory.tmp
  ], [
    'app/*.html',
    'app/fonts/**/*.{otf,eot,svg,ttf,woff}',
    'app/styles/**/*.css',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/partials/**/*.html',
    'app/images/**/*'
  ],
  [
    'google chrome'
  ]);
});

//#== Inicializa um servidor a partir do diretório de distribuição
gulp.task('server:dist', [], function () {
  browserSyncInit(appSettings.directory.build);
});
