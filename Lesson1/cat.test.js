const Cat = require('./cat');

describe('Cat Tests', () => {
  let kitty;

  beforeEach(() => {
    kitty = new Cat('Kitty');
  });

  test('is cat', () => {});

  test('name', () => {
    expect(kitty.name).toBe('Kitty');
  });

  test('miaow', () => {
    expect(kitty.miaow()).toMatch(/ is miaowing\./);
    expect(kitty.miaow()).toContain(' is miaowing.');
  });

  test('raises error', () => {
    expect(() => new Cat()).toThrow();
  });
});