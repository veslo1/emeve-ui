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
  this.config = function(){
    return require('./lib/config').config;
  };

  /**
   * Obtem recursos de exceções e erros do sistema
   * @returns {exports.error|*}
   */
  this.error = function(){
    return require('./lib/error').error;
  };

  /**
   * Obtem mensagens do sistema
   * @returns {exports.message|*}
   */
  this.message = function(){
    return require('./lib/message').message;
  };

  /**
   * Inicializa a aplicação
   * @returns {mvApp}
   */
  this.init = function(){
    this.gulp = require('gulp');
    this.config().load();
    this.initPluginCollection();
    this.bs = this.$().browserSync;
    this.wiredep = this.$().wiredep.stream;
    return this;
  };

  this.loadTasks = function(){
    require('require-dir')('./task/tool');
    require('require-dir')('./task/font');
    require('require-dir')('./task/build');
    require('require-dir')('./task/deploy');
    require('require-dir')('./task/');
  };

  /**
   * inicia
   * @returns {{}|*}
   */
  this.initPluginCollection = function(){
    this.plugins = require('gulp-load-plugins')({
      pattern: this.requiredPlugins
    });
    return this.plugins;
  };

  /**
   * Obtem lista de plugins
   * @returns {{}|*}
   */
  this.$ = function(){
    return this.plugins;
  };

  /**
   * Reload BrowserSync
   * @returns {*|void}
   */
  this.reload = function(){
    return this.bs.reload({stream: true})
  };

};

var inst = new mvApp();
module.exports = inst;
