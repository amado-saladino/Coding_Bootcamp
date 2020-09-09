// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

/**
 * find width of each tree level
 * course solution
 * @param {Any} root root node in a tree
 */
function levelWidth(root) {
   const counters = [0]
   const arr = [root, 'end']

   while (arr.length > 1) {
       const node = arr.shift()

       if (node === 'end') {
           counters.push(0)
           arr.push('end')
       } else {
           counters[counters.length -1]++
           arr.push(...node.children)
       }
   }
   return counters
}

function _levelWidth(root) {
    const arr = [root, 'end']
    const counters = [0]

    for (let i=0;i < arr.length; i++) {
        if (i === arr.length -1) break

        if (arr[i] !== 'end') {
            arr.push(...arr[i].children)
            counters[counters.length -1]++
        } else {
            arr.push('end')
            counters.push(0)
        }
    }
    return counters
}

module.exports = levelWidth;
