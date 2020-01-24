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
  })

});
