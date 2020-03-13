const pyramid = require('./index').pyramid
const pyramid2 = require('./index').pyramid2
const pyramid3 = require('./index').pyramid3

describe('My Solution - Iterative Solution',()=>{
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });
  
  test('pyramid is a function', () => {
    expect(typeof pyramid).toEqual('function');
  });
  
  test('prints a pryamid for n = 2', () => {
    pyramid(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
  });
  
  test('prints a pryamid for n = 3', () => {
    pyramid(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    expect(console.log.mock.calls.length).toEqual(3);
  });
  
  test('prints a pryamid for n = 4', () => {
    pyramid(4);
    expect(console.log.mock.calls[0][0]).toEqual('   #   ');
    expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
    expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
    expect(console.log.mock.calls[3][0]).toEqual('#######');
    expect(console.log.mock.calls.length).toEqual(4);
  });
})

describe('Course Solution - Iterative Solution',()=>{
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });
  
  test('pyramid is a function', () => {
    expect(typeof pyramid2).toEqual('function');
  });
  
  test('prints a pryamid for n = 2', () => {
    pyramid2(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
  });
  
  test('prints a pryamid for n = 3', () => {
    pyramid2(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    expect(console.log.mock.calls.length).toEqual(3);
  });
  
  test('prints a pryamid for n = 4', () => {
    pyramid2(4);
    expect(console.log.mock.calls[0][0]).toEqual('   #   ');
    expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
    expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
    expect(console.log.mock.calls[3][0]).toEqual('#######');
    expect(console.log.mock.calls.length).toEqual(4);
  });
})

describe('Course Solution - Recursive Solution',()=>{
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });
  
  test('pyramid is a function', () => {
    expect(typeof pyramid3).toEqual('function');
  });
  
  test('prints a pryamid for n = 2', () => {
    pyramid3(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
  });
  
  test('prints a pryamid for n = 3', () => {
    pyramid3(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    expect(console.log.mock.calls.length).toEqual(3);
  });
  
  test('prints a pryamid for n = 4', () => {
    pyramid3(4);
    expect(console.log.mock.calls[0][0]).toEqual('   #   ');
    expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
    expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
    expect(console.log.mock.calls[3][0]).toEqual('#######');
    expect(console.log.mock.calls.length).toEqual(4);
  });
})
