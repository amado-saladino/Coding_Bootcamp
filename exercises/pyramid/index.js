// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(rows) {
    const cols = (rows -1) + rows //or 2 * rows -1
    const mid = Math.floor(cols /2)
    for (let row=0;row<rows;row++) {
       let line = ''
       const left = mid -row, right = mid +row
       for (let col=0;col<cols;col++) {
           if (col<left || col > right)  
                line += ' '
           else 
                line += '#'
       }
       console.log(line)
    }
}

function pyramid2(rows) {
    const cols = (rows -1) + rows //or 2 * rows -1
    const mid = Math.floor(cols /2)
    for (let row=0;row<rows;row++) {
       let line = ''
       const left = mid -row, right = mid +row
       for (let col=0;col<cols;col++) {
           if (col >= left && col <=right)  
                line += '#'
           else 
                line += ' '
       }
       console.log(line)
    }
}

function pyramid3(n, row =0, line ='')  {
    if (n===row) return

    if (line.length === 2 * n -1) {
        console.log(line)
        return pyramid3(n,row+1)
    }

    const mid = Math.floor((2 * n -1) /2)
    if (line.length >= mid-row && line.length <= mid+row)
        line += '#'
    else
        line += ' '
        
    pyramid3(n, row, line)
}

module.exports = {pyramid, pyramid2, pyramid3}
