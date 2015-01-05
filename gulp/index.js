'use strict';

var mvApp = function () {

  this.gulp = {};
  this.bs = {};
  this.wiredep = {};
  this.plugins = {};
  this.requiredPlugins = [
    'gulp-*',
    'browser-sync',
    'del',
    'favicons',
    'http-proxy',
    'jshint-stylish',
    'main-bower-files',
    'wiredep'
  ];

  /**
   * Obtem aquivo de configuração
   * @returns {exports}
   */
  this.config = function () {
    return require('./lib/config').config;
  };

  /**
   * Obtem recursos de exceções e erros do sistema
   * @returns {exports.error|*}
   */
  this.error = function () {
    return require('./lib/error').error;
  };

  /**
   * Obtem mensagens do sistema
   * @returns {exports.message|*}
   */
  this.message = function () {
    return require('./lib/message').message;
  };

  /**
   * Inicializa a aplicação
   * @returns {mvApp}
   */
  this.init = function () {
    this.gulp = require('gulp');
    this.config().load();
    this.initPluginCollection();
    this.bs = this.$().browserSync;
    this.wiredep = this.$().wiredep.stream;
    return this;
  };

  /**
   * Carrega as outras tarefas
   * @returns {mvApp}
   */
  this.loadTasks = function () {
    //require('require-dir')('./task/tool');
    //require('require-dir')('./task/font');
    //require('require-dir')('./task/build');
    //require('require-dir')('./task/deploy');
    require('require-dir')('./task/');
    return this;
  };

  /**
   * inicia
   * @returns {{}|*}
   */
  this.initPluginCollection = function () {
    this.plugins = require('gulp-load-plugins')({
      pattern: this.requiredPlugins
    });
    return this.plugins;
  };

  /**
   * Obtem lista de plugins
   * @returns {{}|*}
   */
  this.$ = function () {
    return this.plugins;
  };

  /**
   * Reload BrowserSync
   * @returns {*|void}
   */
  this.reload = function () {
    return this.bs.reload({stream: true})
  };

  /**
   * Obtem o servidor proxy
   * @returns {*}
   */
  this.proxyServer = function () {
    return httpProxy.createProxyServer({
      target: this.config().get().server.proxy
    });
  };

  /* proxyMiddleware forwards static file requests to BrowserSync server
   and forwards dynamic requests to your real backend */

  this.proxyMiddleware = function (req, res, next) {
    if (/\.(html|css|map|js|png|jpg|jpeg|gif|ico|xml|rss|txt|eot|svg|ttf|woff|php|phtml)(\?((r|v|rel|rev)=[\-\.\w]*)?)?$/.test(req.url)) {
      return next();
    } else {
      return this.proxyServer().web(req, res);
    }
  };

  /**
   * Inicializa 0 servidor de páginas estáticas
   * @param baseDir
   * @param files
   * @param browser
   * @returns {*|mvApp}
   */
  this.initStaticServer = function (baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    return this.bs.instance = this.bs.init(files, {
      startPath: '/index.html',
      port: this.config().server().sync.port,
      server: {
        startPath: '/index.html',
        baseDir: baseDir,
        middleware: [this.proxyMiddleware]
      },
      browser: browser
    });
  };

};

var mvAppInstance = new mvApp();
mvAppInstance.init();
module.exports = mvAppInstance;
