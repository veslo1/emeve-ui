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
        control: {
          cssClass: 'mv-control',
          default:{
            icon: 'name'
          },
          toggle:{
            cssClass:'mv-control-toggle'
          }
        },
        editor:{
          cssClass: 'mv-editor',
          options : {
            buttons: [
              "selectAll",
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontFamily",
              "fontSize",
              "color",
              "formatBlock",
              "blockStyle",
              "inlineStyle",
              "align",
              "insertOrderedList",
              "insertUnorderedList",
              "outdent",
              "indent",
              "createLink",
              "insertHorizontalRule",
              "insertImage",
              "insertVideo",
              "table",
              "undo",
              "redo",
              "removeFormat",
              "fullscreen"
            ],
            language: 'pt_br',
            height: 300
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
              item: {
                total: 20,
                perPage: 10
              },
              page: {
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
        },
        window: {
          modal: {
            cssClass: 'mv-modal',
            css: {
              open: 'mv-modal-open',
              body: 'mv-modal-body',
              header: 'mv-modal-header',
              footer: 'mv-modal-footer'
            },
            default: {
              animation: 'fade'
            },
            templates: {
              main: 'mv-ui/window/modal.html',
              header: 'mv-ui/window/modal-header.html',
              body: '',
              footer: ''
            }
          }
        }
      },
      i18n:{
        default: 'pt_br'
      }
    };

    this.getConfig = function () {
      return this.config;
    }
  }]);
