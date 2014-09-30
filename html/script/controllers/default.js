angular.module('EmeveUiApp')
  .controller('DefaultCtrl', function ($scope) {
    $scope.list = ['um', 'dois', 'tres'];
    $scope.options = [
      {url:'/',label:'Item 01'},
      {url:'/',label:'Item 02'},
      {url:'/',label:'Item 03'}
    ]

    $scope.status = 'status';

    $scope.vai = function($event){
      $event.preventDefault();
      console.log('vai');

      $scope.$apply(function(){alert('vai')});
    }

    $scope.setStatus = function(value){
      $scope.status = value;
    };
  });
