// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const stringified = n.toString().split('')
    const signed = stringified[0] === '-'
    let reverse = parseInt(stringified.reverse().join(''))
    return signed ? 0 - reverse : reverse
}

function reverseInt1(n) {
    const reverse = parseInt(n.toString().split('').reverse().join(''))
    return Math.sign(n) * reverse
}

//module.exports = reverseInt;
module.exports = {reverseInt, reverseInt1}
