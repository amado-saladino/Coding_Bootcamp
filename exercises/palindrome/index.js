// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reverse = str.split('').reverse().join('');
    return reverse === str
}

function palindrome1(str) {
    return str.split('').every((char, index)=>{
        return char === str[str.length - index -1]
    })
}

function palindrome2(str) {
    alike = false, start=0, end = str.length -1

    while (start<=end) {
        alike = str[start++] === str[end--]
        if (!alike) break
    }
    return alike
}

//module.exports = palindrome;
module.exports = {palindrome, palindrome1, palindrome2}
