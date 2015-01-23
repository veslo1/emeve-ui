var mvUi = angular.module('mvUi.Config', [])
  .service('mvConfigService', [function () {
    this.config = {
      component: {
        btn: {
          cssClass: 'mv-btn',
          default: {
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
          item: {
            cssClass: 'mv-item'
          },
          list: {
            cssClass: 'mv-list'
          },
          row: {
            cssClass: 'mv-row'
          }
        },
        menu: {
          dropdown: {
            cssClass: 'mv-dropdown',
            css: {
              backdrop: 'mv-dropdown-backdrop',
              header: 'mv-dropdown-header',
              menu: 'mv-dropdown-menu',
              left: 'mv-dropdown-menu-left',
              right: 'mv-dropdown-menu-right'
            }
          },
          paginator: {
            cssClass: 'mv-paginator',
            default: {
              ngModel: 1,
              maxSize: null,
              rotate: true,
              item:{
                total: 20,
                perPage: 10
              },
              page:{
                num: angular.noop
              },
              enable: {
                links: {
                  direction: true,
                  boundary: false
                }
              },
              text: {
                previous: 'Previous',
                next: 'Next',
                first: 'First',
                last: 'Last'
              }
            }
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
