var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.deepStrictEqual(calculator.runningTotal, 5);
  })

  it('should subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.deepStrictEqual(calculator.runningTotal, 3);
  })

  it('should multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.deepStrictEqual(calculator.runningTotal, 15);
  })

  it('should divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.deepStrictEqual(calculator.runningTotal, 3);
  })

  it('should concatenate multiple number clicks', function(){
    calculator.numberClick(3);
    calculator.numberClick(1);
    assert.deepStrictEqual(calculator.runningTotal, 31);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(10);
    calculator.operatorClick('=')
    assert.deepStrictEqual(calculator.runningTotal, 25);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(9);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.deepStrictEqual(calculator.runningTotal, 7);
  })
});
