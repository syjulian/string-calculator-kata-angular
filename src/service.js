'use strict';

angular.module('StringCalculator').value('StringCalculatorService', 
  function(str) {
    var delimiter = (str.match(/\/\/(.)\n/) || [/\,|\n/]).pop();

    return str.split(delimiter)
      .filter((e) => { return +e <= 1000; })
      .reduce((acc, e) => { 
        if(+e < 0) throw new Error();
        return acc + +e; }, 0);
});
