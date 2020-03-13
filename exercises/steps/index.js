// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let iteration = 1; iteration <= n; iteration++) {
        console.log('#'.repeat(iteration) + ' '.repeat(n-iteration))
    }
}

function steps2(n) {
    for (let rows = 0; rows < n; rows++) {
        let stairs = ''
        for (let columns = 0; columns < n; columns++) {
            stairs+= columns<=rows ? '#' : ' '
        }
        console.log(stairs)
    }
}

function steps3(n, row=0, stairs='') {
    if (row === n) return

    if (stairs.length === n){
        console.log(stairs)
        return steps3(n,row+1)
    }

    if (stairs.length <=row) 
        stairs += '#'
    else
        stairs+=' '
    steps3(n, row, stairs)
}

module.exports = {steps, steps2, steps3};
