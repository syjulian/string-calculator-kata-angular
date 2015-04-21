'use strict';

describe("StringCalculator", function() {
  var stringCalculatorService;

  beforeEach(module('StringCalculator'));

  it('should load angular', () => {
    expect(angular).toBeDefined();
  });

  it('should have the app registered', () => {
    expect(angular.module('StringCalculator')).toBeDefined();
  });
});
