'use strict';

angular.module('StringCalculator').value('StringCalculatorService', 
  function(str) {
    var custom_delimiter_match = str.match(/^\/\/(.*)\n/);
    var custom_delimiter;

    if(custom_delimiter_match) {
      str = str.split('\n').slice(1).join('\n');
      var raw_custom_delimiter = custom_delimiter_match.pop();
      var multichar_match = raw_custom_delimiter.match(/\[(.*?)\]/);
      custom_delimiter = (multichar_match || [raw_custom_delimiter]).pop();
    }

    var delimiter = custom_delimiter || /\,|\n/;

    return str.split(delimiter)
      .filter((e) => { return +e <= 1000; })
      .reduce((acc, e) => { 
        if(+e < 0) throw new Error();
        return acc + +e; }, 0);
});
