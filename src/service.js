'use strict';

angular.module('StringCalculator').value('StringCalculatorService', 
  function(str) {
    return +str;
});
