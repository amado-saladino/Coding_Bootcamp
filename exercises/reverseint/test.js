const reverseInt = require('./index').reverseInt
const reverseInt1 = require('./index').reverseInt1

describe('reverseInt works properly',()=>{
  test('ReverseInt function exists', () => {
    expect(reverseInt).toBeDefined();
  });
  
  test('ReverseInt handles 0 as an input', () => {
    expect(reverseInt(0)).toEqual(0);
  });
  
  test('ReverseInt flips a positive number', () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });
  
  test('ReverseInt flips a negative number', () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
})

describe('ReverseInt1 should work properly',()=>{
  test('ReverseInt function exists', () => {
    expect(reverseInt1).toBeDefined();
  });
  
  test('ReverseInt handles 0 as an input', () => {
    expect(reverseInt1(0)).toEqual(0);
  });
  
  test('ReverseInt flips a positive number', () => {
    expect(reverseInt1(5)).toEqual(5);
    expect(reverseInt1(15)).toEqual(51);
    expect(reverseInt1(90)).toEqual(9);
    expect(reverseInt1(2359)).toEqual(9532);
  });
  
  test('ReverseInt flips a negative number', () => {
    expect(reverseInt1(-5)).toEqual(-5);
    expect(reverseInt1(-15)).toEqual(-51);
    expect(reverseInt1(-90)).toEqual(-9);
    expect(reverseInt1(-2359)).toEqual(-9532);
  });
})
