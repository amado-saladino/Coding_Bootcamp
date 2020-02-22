const fizzBuzz = require('./index').fizzBuzz
const fizzBuzz1 = require('./index').fizzBuzz1
const fizzBuzz2 = require('./index').fizzBuzz2

describe('Course solution using classic for loop', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('fizzBuzz function is defined', () => {
    expect(fizzBuzz).toBeDefined();
  });

  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);

    expect(console.log.mock.calls.length).toEqual(5);
  });

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz(15);

    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual('fizz');
    expect(console.log.mock.calls[3][0]).toEqual(4);
    expect(console.log.mock.calls[4][0]).toEqual('buzz');
    expect(console.log.mock.calls[5][0]).toEqual('fizz');
    expect(console.log.mock.calls[6][0]).toEqual(7);
    expect(console.log.mock.calls[7][0]).toEqual(8);
    expect(console.log.mock.calls[8][0]).toEqual('fizz');
    expect(console.log.mock.calls[9][0]).toEqual('buzz');
    expect(console.log.mock.calls[10][0]).toEqual(11);
    expect(console.log.mock.calls[11][0]).toEqual('fizz');
    expect(console.log.mock.calls[12][0]).toEqual(13);
    expect(console.log.mock.calls[13][0]).toEqual(14);
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
  });
})


describe('My Solution using while loop and if else', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });


  test('fizzBuzz function is defined', () => {
    expect(fizzBuzz1).toBeDefined();
  });

  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz1(5);

    expect(console.log.mock.calls.length).toEqual(5);
  });

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz1(15);

    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual('fizz');
    expect(console.log.mock.calls[3][0]).toEqual(4);
    expect(console.log.mock.calls[4][0]).toEqual('buzz');
    expect(console.log.mock.calls[5][0]).toEqual('fizz');
    expect(console.log.mock.calls[6][0]).toEqual(7);
    expect(console.log.mock.calls[7][0]).toEqual(8);
    expect(console.log.mock.calls[8][0]).toEqual('fizz');
    expect(console.log.mock.calls[9][0]).toEqual('buzz');
    expect(console.log.mock.calls[10][0]).toEqual(11);
    expect(console.log.mock.calls[11][0]).toEqual('fizz');
    expect(console.log.mock.calls[12][0]).toEqual(13);
    expect(console.log.mock.calls[13][0]).toEqual(14);
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
  });
})

describe('Course solution using ternary operator', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('fizzBuzz function is defined', () => {
    expect(fizzBuzz2).toBeDefined();
  });

  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz2(5);

    expect(console.log.mock.calls.length).toEqual(5);
  });

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz2(15);

    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual('fizz');
    expect(console.log.mock.calls[3][0]).toEqual(4);
    expect(console.log.mock.calls[4][0]).toEqual('buzz');
    expect(console.log.mock.calls[5][0]).toEqual('fizz');
    expect(console.log.mock.calls[6][0]).toEqual(7);
    expect(console.log.mock.calls[7][0]).toEqual(8);
    expect(console.log.mock.calls[8][0]).toEqual('fizz');
    expect(console.log.mock.calls[9][0]).toEqual('buzz');
    expect(console.log.mock.calls[10][0]).toEqual(11);
    expect(console.log.mock.calls[11][0]).toEqual('fizz');
    expect(console.log.mock.calls[12][0]).toEqual(13);
    expect(console.log.mock.calls[13][0]).toEqual(14);
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
  });
})