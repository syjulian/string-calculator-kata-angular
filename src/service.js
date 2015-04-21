'use strict';

angular.module('StringCalculator').value('StringCalculatorService', 
  function(str) {
    return str.split(/\,|\n/).reduce((acc, e) => { return acc + +e; }, 0);
});
