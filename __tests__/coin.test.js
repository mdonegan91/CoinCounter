import { coinCounterRecursion, coinCounterClosure } from './../src/coin.js';

describe('coinCounterRecursion', () => {
  test('should a return a string with number of quarters, dimes, nickels, and pennies for change', () => {
      expect(coinCounterRecursion(91)).toEqual("3 quarters 1 dimes 1 nickels 1 pennies ");
      expect(coinCounterRecursion(99)).toEqual("3 quarters 2 dimes 4 pennies ");
      expect(coinCounterRecursion("hi")).toEqual("Please enter a number.");
  })
})

describe('coinCounterClosure', () => {
  test('should return a string with number of quarters, dimes, nickels, and pennies for change', () => {
      expect(coinCounterClosure(91)()).toEqual("3 quarters 1 dimes 1 nickels 1 pennies");
  })
})