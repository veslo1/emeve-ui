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

  .controller('BtnController', ['$scope',function ($scope) {
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


      $http.get('/data/icons.json')
        .success(function(data,status,headers,config){
          $scope.icons = data.icons;
        })
        .error(function(data,status,headers,config){
          $scope.icons = [];
          $scope.error = true;
        });
  }])

  .controller('FormController', ['$scope',function ($scope) {
    $scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}
    ];

    $scope.colorNames = [
      {label:'Vermelho', value: '#f00'},
      {label:'Verde', value: '#0f0'},
      {label:'Azul', value: '#00f'}
    ];

    $scope.mvfData = {
      version: '3.2.0b~Kernel2.5'
      //colorPerfil: {}
    };
    // Número da sala de prova
    //$scope.mvFormData = {
    //  textToggle: 1,
    //  selectName: 'white',
    //  textInfo: 'Um informação qualquer'
    //};

  }]);
