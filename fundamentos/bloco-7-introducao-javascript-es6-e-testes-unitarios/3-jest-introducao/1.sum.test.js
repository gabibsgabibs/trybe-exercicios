const sum = require('./1.sum');

describe('test sum function()', () => {

  it('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('sum throw an error when the parameters are strings', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
});
