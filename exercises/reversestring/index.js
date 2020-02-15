// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//  original export is commented out
//  more versions of the function added


//not reconmmended
function reverse(str) {
    let result = ''
    for (let index=str.length-1;index>-1;index--) {
        result = result + str.charAt(index)
    }
    return result
}

function reverse1(str) {
    const result = Array.from(str)
    //const result = str.split('')
    result.reverse()
    return result.join('')
}

function reverse2(str) {
    return str
    .split('')
    .reverse()
    .join('')
}

function reverse3(str) {
    let result = ''
    for(let ch of str) {
        result = ch + result
    }
    return result
}

function reverse4(str) {
    //debugger //for debugging only
    return str.split('').reduce((accum, current)=>current + accum)
}

function reverse5(str) {
    let result = ''
    let length = str.length -1
    while (length >= 0) {
        result = result + str[length--]
    }
    return result
}

//reverse4('test me') //for debugging only

module.exports = { reverse, reverse1, reverse2, reverse3, reverse4, reverse5 }
//module.exports = reverse  //the original export in the course