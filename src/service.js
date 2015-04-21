'use strict';

angular.module('StringCalculator').value('StringCalculatorService', 
  function(str) {
    return str.split(/\,|\n/)
      .filter((e) => { return +e <= 1000; })
      .reduce((acc, e) => { 
        if(+e < 0) throw new Error();
        return acc + +e; }, 0);
});
