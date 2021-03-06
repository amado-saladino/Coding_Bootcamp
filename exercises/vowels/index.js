// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0
    for (const char of str.toLowerCase()) {
        switch (char) {
            case 'a':
            case 'o':
            case 'u':
            case 'i':
            case 'e':
                count++                
                break;
            default:
                break;
        }
    }
    return count
}

function vowels2(str) {
    return str.match(/[aouie]/ig) ? str.match(/[aouie]/ig).length : 0
}

function vowels3(str) {
    let count = 0
    const checkpoints =['a', 'e', 'i', 'o', 'u']
    for (const c of str.toLowerCase()) {
        if (checkpoints.includes(c))
            count++
    }
    return count
}

module.exports = {vowels, vowels2, vowels3}
