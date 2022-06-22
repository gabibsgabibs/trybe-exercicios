const myFizzBuzz = require('./3.myFizzBuzz');

describe('test myFizzBuzz function', () => {
  it('myFizzBuzz returns the right string', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(14)).toBe(14);
    expect(myFizzBuzz('2')).toBe(false);
  })
});

