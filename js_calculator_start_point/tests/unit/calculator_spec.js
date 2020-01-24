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
    assert.equal(5, calculator.runningTotal)
  });

  it('it can subtract two numbers', function(){
    calculator.previousTotal = "7"
    calculator.subtract("4")
    assert.equal(3, calculator.runningTotal)
  });

  it('it can multiply two numbers', function(){
    calculator.previousTotal = "3"
    calculator.multiply("5")
    assert.equal(15, calculator.runningTotal)
  });

  it('it can divide two numbers', function(){
    calculator.previousTotal = "21"
    calculator.divide("7")
    assert.equal(3, calculator.runningTotal)
  });

  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick("1")
    calculator.numberClick("2")
    calculator.numberClick("3")
    assert.equal(123, calculator.runningTotal)
  });

  // it('', function(){
  //
  //   assert.equal(true, true)
  // });

  // it('', function(){
  //
  //   assert.equal(true, true)
  // });

});
