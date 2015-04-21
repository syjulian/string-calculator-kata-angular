'use strict';

describe('StringCalculator', function() {
  var stringCalculatorService;

  beforeEach(module('StringCalculator'));

  it('should return 0 when given an empty string', inject(function(_StringCalculatorService_) {
    stringCalculatorService = _StringCalculatorService_;

    expect(stringCalculatorService('')).toEqual(0);
  }));
});
