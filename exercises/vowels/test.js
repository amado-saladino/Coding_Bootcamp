const vowels = require('./index').vowels
const vowels2 = require('./index').vowels2
const vowels3 = require('./index').vowels3

describe('My Solution - Iterative',()=>{
  test('Vowels is a function', () => {
    expect(typeof vowels).toEqual('function');
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels('aeiou')).toEqual(5);
  });
  
  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowels('AEIOU')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels('bcdfghjkl')).toEqual(0);
  });
})


describe('My Solution - Regular Expression',()=>{
  test('Vowels is a function', () => {
    expect(typeof vowels2).toEqual('function');
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels2('aeiou')).toEqual(5);
  });
  
  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowels2('AEIOU')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels2('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels2('bcdfghjkl')).toEqual(0);
  });
})

describe('Course Solution - Iterative',()=>{
  test('Vowels is a function', () => {
    expect(typeof vowels2).toEqual('function');
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels2('aeiou')).toEqual(5);
  });
  
  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowels2('AEIOU')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels2('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });
  
  test('returns the number of vowels used', () => {
    expect(vowels2('bcdfghjkl')).toEqual(0);
  });
})
