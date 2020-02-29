// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const map1 = toMap(stringA)
    const map2 = toMap(stringB)

    if (Object.keys(map1).length !== Object.keys(map2).length)
        return false
    
    for (const key in map1) {
        if (map1[key] !== map2[key]) {
            return false          
        }
    }
    return true
}

function anagrams2(stringA, stringB) {
    return sortString(stringA) === sortString(stringB)
 }

 function sortString(str) {
     return str.toLowerCase().match(/\w/g).sort().join('')
 }

function toMap(str) {
    const map = {}
    const arr = str.toLowerCase().match(/\w/g)
    for (const c of arr) {
        map[c] = map[c] +1 || 1
    }
    return map
}

module.exports = {anagrams, anagrams2}
