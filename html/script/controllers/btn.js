'use strict';

angular.module('EmeveUiApp')
    .controller('BtnCtrl', function ($scope) {
        $scope.list = ['um', 'dois', 'tres'];

        // Número da sala de prova
        $scope.numSala = 1;

        $scope.blastoise = true;
    });
