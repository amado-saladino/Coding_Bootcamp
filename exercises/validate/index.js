// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

/**
 * course solution
 */
function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) return false
    if (min !== null && node.data < min) return false

    if (node.left && !validate(node.left, min, node.data)) return false
    if (node.right && !validate(node.right, node.data, max)) return false

    return true
}

function _validate(node) {
    if (!node) return true

    const stack = [[node, null, null]]
    

    while (stack.length > 0) {
		let [root, min, max] = stack.pop()
		
        if (!root) continue
        
        const value = root.data

        if (max !== null && root.data > max) return false
        if (min !== null && root.data < min) return false

        stack.push([root.right, value, max])
        stack.push([root.left, min, value])
    }
    return true    
}

module.exports = validate;
