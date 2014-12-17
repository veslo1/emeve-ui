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
      console.log(value);
    };
  }])

  .controller('BtnController', ['$scope',function ($scope) {
    $scope.list = ['um', 'dois', 'tres'];

    // Número da sala de prova
    $scope.numSala = 1;

    $scope.blastoise = true;
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


'use strict';

angular.module('EmeveUiApp.Route', ['ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DefaultController'
      })
      .when('/btn', {
        templateUrl: 'views/button.html',
        controller: 'BtnController'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
      })
      .when('/:controller',{
        templateUrl:function(attrs){
          return 'views/' + attrs.controller + '.html';
        },
        controller: 'DefaultController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var EmeveUiApp = angular.module('EmeveUiApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'EmeveUiApp.Controller',
  'EmeveUiApp.Route',
  'mvUi'
]);
