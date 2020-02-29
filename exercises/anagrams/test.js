const anagrams = require('./index.js').anagrams
const anagrams2 = require('./index.js').anagrams2

describe('Course Solution - Map',()=>{
  test('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
  });
  
  test('"hello" is an anagram of "llohe"', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
  });
  
  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  });
  
  test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
  });
  
  test('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams('One one', 'One one c')).toBeFalsy();
  });
  
  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
  });
})

describe('Course Solution - Sort',()=>{
  test('anagrams function exists', () => {
    expect(typeof anagrams2).toEqual('function');
  });
  
  test('"hello" is an anagram of "llohe"', () => {
    expect(anagrams2('hello', 'llohe')).toBeTruthy();
  });
  
  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams2('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  });
  
  test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams2('One One', 'Two two two')).toBeFalsy();
  });
  
  test('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams2('One one', 'One one c')).toBeFalsy();
  });
  
  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagrams2('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
  });
})
