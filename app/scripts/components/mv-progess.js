angular.module('mvUi.Progress', [])
  .directive('mvProgressCirc', [
    'Modernizr',
    function (Modernizr) {
      return {
        restrict: 'A',
        link: function (scope, iElement, iAttr) {
          var progressValue = 75;
          var lineWidth = 5;
          var canvas = iElement[0];

          if (!Modernizr.canvas) {
            var ctx = canvas.getContext("2d");
            var x = canvas.width / 2;
            var y = canvas.height / 2;
            var radius = ((canvas.width / canvas.height) * 100) - lineWidth;

            ctx.beginPath();
            ctx.arc(x, y, radius, -1.5, Math.PI * (progressValue / 50) - 1.5, false);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = '#ff00cc'
            ctx.stroke();
          }else{
            var erro = angular.element('<p/>');
            erro.attr('style','display:block;position:absolute;padding:1em;top:0;width:'+canvas.width+'px;')
            erro.text('Sistema não possui suporte a Canvas');
            iElement.after(erro);
          }
        }
      };
    }]);
