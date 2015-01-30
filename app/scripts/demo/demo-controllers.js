angular.module('EmeveUiApp.Controller', [])
  .controller('DefaultController', ['$scope',
    function ($scope) {
      $scope.list = ['um', 'dois', 'tres'];
      $scope.options = [
        {url: '/', label: 'Item 01'},
        {url: '/', label: 'Item 02'},
        {url: '/', label: 'Item 03'}
      ]

      $scope.status = 'status';

      $scope.vai = function ($event) {
        //$event.preventDefault();
        console.log($scope.status)

      }

      $scope.setStatus = function (value) {
        $scope.status = value;
        //console.log(value);
      };
    }])

  .controller('BtnController', ['$scope', function ($scope) {
    $scope.list = ['um', 'dois', 'tres'];

    // Número da sala de prova
    $scope.numSala = 1;

    $scope.blastoise = true;
  }])

  .controller('IconController', ['$scope', '$http',
    function ($scope, $http) {

      $scope.icons = [];
      $scope.error = false;
      $scope.criterio = '';


      $http.get('data/icons.json')
        .success(function (data, status, headers, config) {
          $scope.icons = data.icons;
        })
        .error(function (data, status, headers, config) {
          $scope.icons = [];
          $scope.error = true;
        });
    }])

  .controller('FormController', ['$scope', function ($scope) {
    $scope.colors = [
      {name: 'black', shade: 'dark'},
      {name: 'white', shade: 'light'},
      {name: 'red', shade: 'dark'},
      {name: 'blue', shade: 'dark'},
      {name: 'yellow', shade: 'light'}
    ];

    $scope.colorNames = [
      {label: 'Vermelho', value: '#f00'},
      {label: 'Verde', value: '#0f0'},
      {label: 'Azul', value: '#00f'}
    ];

    $scope.mvfData = {
      version: '3.2.0b~Kernel2.5',
      active: true,
      colorPerfil: {},
      colorFav: [],
      review:''
    };
    // Número da sala de prova
    //$scope.mvFormData = {
    //  textToggle: 1,
    //  selectName: 'white',
    //  textInfo: 'Um informação qualquer'
    //};

  }])

  .controller('EditorController', ['$scope', function ($scope) {
    $scope.textHtml = '';
    $scope.froalaOptions = {
      convertMailAddresses: true,
      inlineMode: false,
      placeholder: 'Enter Text Here',
      language: 'pt_br',
      buttons: ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "fontFamily", "fontSize", "color", "formatBlock", "blockStyle", "inlineStyle", "align", "insertOrderedList", "insertUnorderedList", "outdent", "indent", "selectAll", "createLink", "insertImage", "insertVideo", "table", "undo", "redo", "html", "save", "insertHorizontalRule", "uploadFile", "removeFormat", "fullscreen"],
      customButtons: {
        alert: {
          title: "Alert",
          icon: {
            type: "font",
            value: "fa fa-info"
          },
          callback: function () {
            alert("Hello!")
          },
          refresh: function () {
            // This method is called when the state of the button might have been changed.
          }
        }
      }
    }

  }])

  .controller('ModalController', [
    '$scope',
    function ($scope, mvModalService) {

      $scope.status = false;

      $scope.salvar = function ($event) {
        $scope.status = 'Registro salvo';
      };
    }]);

