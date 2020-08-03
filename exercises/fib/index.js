// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib_recur(n) {
    //or if (n < 2)
    if (n <= 1) return n
    return fib_recur(n - 1) + fib_recur(n - 2)
}

const fib_iter = (n)=> {
    num1 = 0
    num2 = 1
    i = 0
    while (i < n) {
        tmp = num1
        num1 = num2        
        num2 = num1 + tmp
        i++
    }
    return num1
}

const fib_iter_arr = (n)=> {
    const res = [0, 1]
    for (i=2; i<= n; i++){
        res.push(res[i - 1] + res[i - 2])
    }
    return res[res.length - 1] //or res[n]
}

//*************************************** */
function fib_recur_slow(n) {
    //or if (n < 2)
    if (n <= 1) return n
    return fibi(n - 1) + fibi(n - 2)
}

function memoizer(func) {
    const cache = {}
    return function(...args) {
        if (cache[args]) return cache[args]

        const result = func(...args)
        cache[args] = result
        return result
    }
}

const fibi = memoizer(fib_recur_slow)

/***************************************** */
function fibonacci_v2(n, mem) {
    mem = mem || {}
    if (mem[n]) return mem[n]

    if (n <= 1) return n

   return mem[n] = fibonacci_v2(n - 1, mem) + fibonacci_v2(n - 2, mem)
}

module.exports = {fib_recur, fib_iter, fib_iter_arr, fibi, fibonacci_v2}
