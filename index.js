// Creamos un controlador para manejar el cálculo de la factura
let app = angular.module("miAplicacion",[]);
app.controller('facturaController', ['$scope', function($scope) {
    // Declaramos las variables necesarias para el cálculo
    $scope.distanciaRecorrida = 0;
    $scope.tarifaFija = 250;
    $scope.tarifaKilometro = 30;
    $scope.tarifaExcesoKilometro = 20;
    $scope.descuento = 0.1; 
    $scope.importeDescuento = 500;
  
    // Declaramos una función para calcular el importe de la factura
    $scope.calcularImporte = function() {
      if ($scope.distanciaRecorrida <= 300) {
        // Si la distancia recorrida es menor o igual a 300 km., se cobra la tarifa fija
        $scope.importe = $scope.tarifaFija;
      } else if ($scope.distanciaRecorrida <= 1000) {
        // Si la distancia recorrida es mayor a 300 km. y menor o igual a 1000 km., se cobra la tarifa fija más el exceso de kilómetros a razón de S/. 30 por km.
        $scope.importe = $scope.tarifaFija + ($scope.distanciaRecorrida - 300) * $scope.tarifaKilometro;
      } else {
        // Si la distancia recorrida es mayor a 1000 km., se cobra la tarifa fija más los kilómetros recorridos entre 300 hasta 1000 a razón de S/. 30, más S/.20 por Kilómetro de exceso en distancias mayores de 1000 km.
        $scope.importe = $scope.tarifaFija + (700 * $scope.tarifaKilometro) + ($scope.distanciaRecorrida - 1000) * $scope.tarifaExcesoKilometro;
      }
  
      // Si el importe es mayor a 500 soles, se aplica el descuento del 10%
      if ($scope.importe > $scope.importeDescuento) {
        $scope.importe -= $scope.importe * $scope.descuento;
      }
    }
  }]);