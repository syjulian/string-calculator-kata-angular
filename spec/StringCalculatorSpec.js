'use strict';

describe('StringCalculator', function() {
  var stringCalculatorService;

  beforeEach(module('StringCalculator'));

  beforeEach(inject(function(_StringCalculatorService_) {
    stringCalculatorService = _StringCalculatorService_;
  }));

  it('should return 0 when given an empty string', function() {
      expect(stringCalculatorService('')).toEqual(0);
  });

  it('should return numeric value of string', function(){
    expect(stringCalculatorService('42')).toEqual(42);
  });

  it('should return sum of comma-delimited numbers', function() {
    expect(stringCalculatorService('13,14,15')).toEqual(42);
  });

  it('should return sum of newline-delimited numbers', function() {
    expect(stringCalculatorService('15\n16\n17')).toEqual(48);
  });

  it('should return sum of both comma and newline delimited numbers', function() {
    expect(stringCalculatorService('11,22\n33')).toEqual(66);
  });

  it('should ignore numbers greater than 1000', function() {
    expect(stringCalculatorService('11,22\n1001')).toEqual(33);
  });

  it('should throw an error when there is a negative number', function() {
    expect(() => { stringCalculatorService('1,2,-1'); }).toThrow();
  });

  it('should use a custom delimiter if it is in first line', function() {
    expect(stringCalculatorService('//#\n23#25#27')).toEqual(75);
  });
});
