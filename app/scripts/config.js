var mvUi = angular.module('mvUi.Config', [])
  .service('mvConfigService', [function () {


    this.config = {
      component: {
        btn: {
          cssClass: 'mv-btn',
          default:{
            color: 'default',
            component: 'component'
          }
        },
        icon: {
          cssClass: 'mv-icon',
          default: {
            prefix: 'fa'
          }
        },
        form: {
          cssClass: 'mv-form'
        },
        layout: {
          col: {
            cssClass: 'mv-col'
          },
          container: {
            cssStrictClass: 'mv-container',
            cssFluidClass: 'mv-container-fluid',
            default: {
              mode: 'fluid'
            }
          },
          item:{
            cssClass: 'mv-item'
          },
          list:{
            cssClass: 'mv-list'
          },
          row: {
            cssClass: 'mv-row'
          }
        },
        table: {
          cssClass: 'mv-table',
          default: {
            normalize: [
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
