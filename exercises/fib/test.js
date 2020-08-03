const fib = require('./index').fib_recur
const fib1 = require('./index').fib_iter
const fib2 = require('./index').fib_iter_arr
const fib3 = require('./index').fibi
const fib4 = require('./index').fibonacci_v2

describe('Fibonacci using recursive', ()=>{
  test('Fib function is defined', () => {
    expect(typeof fib).toEqual('function');
  });
  
  test('calculates correct fib value for 1', () => {
    expect(fib(1)).toEqual(1);
  });
  
  test('calculates correct fib value for 2', () => {
    expect(fib(2)).toEqual(1);
  });
  
  test('calculates correct fib value for 3', () => {
    expect(fib(3)).toEqual(2);
  });
  
  test('calculates correct fib value for 4', () => {
    expect(fib(4)).toEqual(3);
  });
  
  test('calculates correct fib value for 15', () => {
    expect(fib(39)).toEqual(63245986);
  });
})

describe('Fibonacci [iterative]', ()=>{
  test('Fib function is defined', () => {
    expect(typeof fib1).toEqual('function');
  });
  
  test('calculates correct fib value for 1', () => {
    expect(fib1(1)).toEqual(1);
  });
  
  test('calculates correct fib value for 2', () => {
    expect(fib1(2)).toEqual(1);
  });
  
  test('calculates correct fib value for 3', () => {
    expect(fib1(3)).toEqual(2);
  });
  
  test('calculates correct fib value for 4', () => {
    expect(fib1(4)).toEqual(3);
  });
  
  test('calculates correct fib value for 15', () => {
    expect(fib(39)).toEqual(63245986);
  });
})

describe('Fibonacci [iterative - array] ', ()=>{
  test('Fib function is defined', () => {
    expect(typeof fib2).toEqual('function');
  });
  
  test('calculates correct fib value for 1', () => {
    expect(fib2(1)).toEqual(1);
  });
  
  test('calculates correct fib value for 2', () => {
    expect(fib2(2)).toEqual(1);
  });
  
  test('calculates correct fib value for 3', () => {
    expect(fib2(3)).toEqual(2);
  });
  
  test('calculates correct fib value for 4', () => {
    expect(fib2(4)).toEqual(3);
  });
  
  test('calculates correct fib value for 15', () => {
    expect(fib(39)).toEqual(63245986);
  });
})

describe('Fibonacci [recursive - memoizer] ', ()=>{
  test('Fib function is defined', () => {
    expect(typeof fib3).toEqual('function');
  });
  
  test('calculates correct fib value for 1', () => {
    expect(fib3(1)).toEqual(1);
  });
  
  test('calculates correct fib value for 2', () => {
    expect(fib3(2)).toEqual(1);
  });
  
  test('calculates correct fib value for 3', () => {
    expect(fib3(3)).toEqual(2);
  });
  
  test('calculates correct fib value for 4', () => {
    expect(fib3(4)).toEqual(3);
  });
  
  test('calculates correct fib value for 15', () => {
    expect(fib3(39)).toEqual(63245986);
  });
})

describe('Fibonacci [recursive - built in memoizer] ', ()=>{
  test('Fib function is defined', () => {
    expect(typeof fib4).toEqual('function');
  });
  
  test('calculates correct fib value for 1', () => {
    expect(fib4(1)).toEqual(1);
  });
  
  test('calculates correct fib value for 2', () => {
    expect(fib4(2)).toEqual(1);
  });
  
  test('calculates correct fib value for 3', () => {
    expect(fib4(3)).toEqual(2);
  });
  
  test('calculates correct fib value for 4', () => {
    expect(fib4(4)).toEqual(3);
  });
  
  test('calculates correct fib value for 15', () => {
    expect(fib4(39)).toEqual(63245986);
  });
})
