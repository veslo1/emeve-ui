var mvUi = angular.module('mvUi.Config', [])
  .service('mvConfigService', [function () {

    this.config = {
      component: {
        btn: {
          cssClass: 'mv-btn'
        },
        icon:{
          cssClass: 'mv-icon',
          default:{
            prefix: 'fa'
          }
        }
      }
    };

    this.getConfig = function () {
      return this.config;
    }
  }]);
