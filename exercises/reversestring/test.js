const reverse = require('./index').reverse
const reverse1 = require('./index').reverse1
const reverse2 = require('./index').reverse2
const reverse3 = require('./index').reverse3
const reverse4 = require('./index').reverse4
const reverse5 = require('./index').reverse5
const reverse6 = require('./index').reverse6

describe('It should work with classic for loop',()=>{
  test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
})

describe('It should work using "array reverse" function',()=>{
  test('Reverse function exists', () => {
    expect(reverse1).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse1('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse1('  abcd')).toEqual('dcba  ');
  });
})

describe('It should work using "split" function',()=>{
  test('Reverse function exists', () => {
    expect(reverse2).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse2('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse2('  abcd')).toEqual('dcba  ');
  });
})

describe('It should work using "for each" loop',()=>{
  test('Reverse function exists', () => {
    expect(reverse3).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse3('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse3('  abcd')).toEqual('dcba  ');
  });
})

describe('It should reverse with "reduce" function',()=>{
  test('Reverse function exists', () => {
    expect(reverse4).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse4('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse4('  abcd')).toEqual('dcba  ');
  });
})

describe('Reverse with "while" loop',()=>{
  test('Reverse function exists', () => {
    expect(reverse5).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse5('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse5('  abcd')).toEqual('dcba  ');
  });
})

describe('Reverse with for loop of half string size', ()=>{
  test('Reverse function exists', () => {
    expect(reverse6).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse6('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse6('  abcd')).toEqual('dcba  ');
  });
})
