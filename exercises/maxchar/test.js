const maxChar = require('./index').maxChar
const maxChar1 = require('./index').maxChar1

describe('Using map', () =>{
  test('maxChar function exists', () => {
    expect(typeof maxChar1).toEqual('function');
  });

  test('Finds the most frequently used char', () => {
    expect(maxChar1('a')).toEqual('a');
    expect(maxChar1('abcdefghijklmnaaaaa')).toEqual('a');
  });

  test('Works with numbers in the string', () => {
    expect(maxChar1('ab1c1d1e1f1g1')).toEqual('1');
  })
})
