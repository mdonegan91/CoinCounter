import { coinCounter } from './../src/coin.js';

describe('coinCounter', () => {
  test('should a return a string with number of quarters, dimes, nickels, and pennies for change', () => {
      expect(coinCounter(91)).toEqual("3 quarters 1 dimes 1 nickels 1 pennies ");
      expect(coinCounter(99)).toEqual("3 quarters 2 dimes 4 pennies ");
      expect(coinCounter("hi")).toEqual("Please enter a number.");
  })
})