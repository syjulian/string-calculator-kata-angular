'use strict';

angular.module('StringCalculator').value('StringCalculatorService', 
  function(str) {
    return str.split(/\,|\n/)
      .filter((e) => { return +e <= 1000; })
      .reduce((acc, e) => { return acc + +e; }, 0);
});
