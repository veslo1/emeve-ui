'use strict';
var message = require('./message');

exports.config = {
  //arquivo de configuração
  files: {
    dir: './../config/',
    extension: '.json',
    autoload: [
      'app',
      'deploy',
      'server'
    ]
  },

  //lista de configurações
  data: {},

  /**
   * Carrega a lista de configurações
   * @returns {*}
   */
  load: function () {
    this.data['bower'] = require('./../../bower.json');
    this.data['package'] = require('./../../package.json');

    for (var i = 0; i < this.files.autoload.length; i++) {
      var config = this.files.autoload[i];
      var file = this.files.dir + config + this.files.extension;
      this.data[config] = require(file);
    }
    return this;
  },

  /**
   * Obtem lista de configurações
   * @returns {*}
   */
  get: function () {
    return this.data;
  },

  /**
   * Retorna as configurações globais
   * @returns {Function}
   */
  app: function(){
    return this.data.app;
  },

  /**
   * Retorna um parâmetro de diretório
   * @returns {String|*}
   */
  dir: function () {
    return this.data.app.dir;
  },

  /**
   * Retorna configurações do servidor
   * @returns {Function|mvApp.bs.instance.server}
   */
  server: function () {
    return this.data.server;
  },

  /**
   * Retorna as configurações do bower
   * @returns {Function|exports}
   */
  bower: function(){
    return this.data.bower;
  },

  /**
   * Retorna as configurações do npm
   * @returns {Function|exports}
   */
  package: function(){
    return this.data.package;
  },

  /**
   * Retorna as configurações de implementação do projeto
   * @returns {Function}
   */
  deploy: function(){
    return this.data.deploy;
  }

};
