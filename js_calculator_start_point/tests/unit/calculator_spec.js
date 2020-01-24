var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it can add two numbers', function(){
    calculator.previousTotal = "4"
    calculator.add("1")
    // Function is returning result as a float
    assert.equal(calculator.runningTotal, 5)
  });

  it('it can subtract two numbers', function(){
    calculator.previousTotal = "7"
    calculator.subtract("4")
    assert.equal(calculator.runningTotal, 3)
  });

  it('it can multiply two numbers', function(){
    calculator.previousTotal = "3"
    calculator.multiply("5")
    assert.equal(calculator.runningTotal, 15)
  });

  it('it can divide two numbers', function(){
    calculator.previousTotal = "21"
    calculator.divide("7")
    assert.equal(calculator.runningTotal, 3)
  });

  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick("1")
    calculator.numberClick("2")
    calculator.numberClick("3")
    assert.equal(calculator.runningTotal, 123)
  });

  it('it can chain multiple operations together', function(){
    calculator.previousOperator = '+'
    calculator.previousTotal = "10"
    calculator.runningTotal = "10"
    calculator.operatorClick("+")
    assert.equal(calculator.previousTotal, 20)
  });

  it('it can clear the running total without affecting calculation', function(){
    calculator.previousTotal = "50"
    calculator.runningTotal = "10"
    calculator.clearClick()
    assert.equal(calculator.previousTotal, 50)
  });

});
