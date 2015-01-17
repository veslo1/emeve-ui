var mvUi = angular.module('mvUi.Config', [])
  .service('mvConfigService', [function () {


    this.config = {
      component: {
        btn: {
          cssClass: 'mv-btn'
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
        grid: {
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
