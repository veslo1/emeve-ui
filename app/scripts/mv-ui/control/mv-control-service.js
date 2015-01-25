angular.module('mvUi.Control.Service', [])
  .service('mvControlFileService', ['$http',
    function ($http) {

      /**
       * Response of success or error
       * @type {{}}
       */
      this.response = {};

      this.setResponse = function (value) {
        this.response = value;
        return this.response;
      };
      /**
       * Efetua o upload de um
       * @param url
       * @param data Um
       */
      this.upload = function (url, data) {
        $http.post(url, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .success(function (data, status, headers, config) {
            return this.setResponse(data);
          })
          .error(function (data, status, headers, config) {
            return this.setResponse(data);
          });
      };
    }]);
