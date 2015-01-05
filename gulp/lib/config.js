'use strict';

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
   * Retorna um parâmetro de diretório
   * @returns {String|*}
   */
  dir: function () {
    return this.data.directory;
  },

  /**
   * Retorna configurações do servidor
   * @returns {Function|mvApp.bs.instance.server}
   */
  server: function () {
    return this.data.server;
  }
};
