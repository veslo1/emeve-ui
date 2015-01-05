'use strict';

exports.config = {
  //arquivo de configuração
  file: 'config.json',

  //lista de configurações
  data: {},

  /**
   * Carrega a lista de configurações
   * @returns {*}
   */
  load: function () {
    this.data = require('./../data/' + this.file);
    return this;
  },

  /**
   * Obtem lista de configurações
   * @returns {*}
   */
  get: function(){
    return this.data;
  },

  /**
   * Retorna um parâmetro de diretório
   * @returns {String|*}
   */
  dir: function(){
    return this.data.directory;
  }
};
