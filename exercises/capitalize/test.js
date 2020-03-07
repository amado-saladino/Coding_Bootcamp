const capitalize = require('./index').capitalize
const capitalize2 = require('./index').capitalize2

describe('My Solution - slice', () => {
  test('Capitalize is a function', () => {
    expect(typeof capitalize).toEqual('function');
  });

  test('capitalizes the first letter of every word in a sentence', () => {
    expect(capitalize('hi there, how is it going?')).toEqual(
      'Hi There, How Is It Going?'
    );
  });

  test('capitalizes the first letter', () => {
    expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
      'I Love Breakfast At Bill Miller Bbq'
    );
  });
})


describe('Course Solution - charachter check', () => {
  test('Capitalize is a function', () => {
    expect(typeof capitalize2).toEqual('function');
  });

  test('capitalizes the first letter of every word in a sentence', () => {
    expect(capitalize2('hi there, how is it going?')).toEqual(
      'Hi There, How Is It Going?'
    );
  });

  test('capitalizes the first letter', () => {
    expect(capitalize2('i love breakfast at bill miller bbq')).toEqual(
      'I Love Breakfast At Bill Miller Bbq'
    );
  });
})
