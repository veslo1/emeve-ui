'use strict';
var Madeira = function () {

  this.getFossa = 'fossa';

  /**
   * Obtem aquivo de configuração
   * @returns {exports}
   */
  this.getConfig = function(){
    return require('./config.json');
  };

  /**
   * Obtem recursos de exceções e erros do sistema
   * @returns {exports.error|*}
   */
  this.error = function(){
    return require('./error').error;
  };

  /**
   * Obtem mensagens do sistema
   * @returns {exports.message|*}
   */
  this.message = function(){
    return require('./message').message;
  };

  /**
   * Inicia aplicação
   */
  this.init = function(){
    require('require-dir')('./task/tool');
    require('require-dir')('./task/font');
    require('require-dir')('./task/build');
    require('require-dir')('./task/deploy');
    require('require-dir')('./task/');
  }
};

var inst = new Madeira();
module.exports = inst;
