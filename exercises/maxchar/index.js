// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars ={}
    for (ch of str) {
        chars[ch] = !chars[ch] ? chars[ch] = 1 : chars[ch]++
        //chars[ch] = chars[ch] + 1 || 1  //the same as line above
    }
}

function maxChar1(str) {
    const letters = new Map()
    for (ch of str) {
        letters.has(ch) ? letters.set(ch, letters.get(ch)+1 ) : letters.set(ch,1)
    }
    
    let max = 0
    let c = ''
    for ([ch,count] of letters.entries()){
        count > max ? (max = count, c= ch) : max
    }
    console.log(`Character: ${c}, repeated: ${max}`)
    return c
}

//module.exports = maxChar;
module.exports = {maxChar, maxChar1}
