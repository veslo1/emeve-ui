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
        },
        table:{
          cssClass: 'mv-table',
          default:{
            normalize:[
              'condensed',
              'hover',
              'striped'
            ]
          }
        }
      }
    };

    this.getConfig = function () {
      return this.config;
    }
  }]);
