angular.module('EmeveUiApp.Controller', [])
  .controller('DefaultCtrl', ['$scope',
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

  .controller('BtnCtrl', ['$scope',function ($scope) {
    $scope.list = ['um', 'dois', 'tres'];

    // Número da sala de prova
    $scope.numSala = 1;

    $scope.blastoise = true;
  }]);

