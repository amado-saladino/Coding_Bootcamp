// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const pieces = str.split(' ')
    const all = []
    for (p of pieces) {
        all.push(`${p[0].toUpperCase()}${p.slice(1)}`)
    }
    return all.join(' ')
}

function capitalize2(str) {
    let result = str[0].toUpperCase()
    for (let char = 1; char < str.length; char++) {
        result += str[char-1] === ' ' ? str[char].toUpperCase() : str[char]        
    }
    return result
}

module.exports = {capitalize, capitalize2};
