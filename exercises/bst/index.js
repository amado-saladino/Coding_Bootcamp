// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    /**
     * insert data in a tree
     * Course Solution
     * @param {any} data data to insert
     */
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data)
        }
        else if (data < this.data) {
            this.left = new Node(data)
        }
        else if (data > this.data && this.right) {
            this.right.insert(data)
        }
        else if (data > this.data) {
            this.right = new Node(data)
        }
    }

    _insert(data) {
        let current = this
        while (current) {
            if (data < current.data) {
                if (current.left) {
                    current = current.left
                }
                else { 
                    current.left = new Node(data)
                    break }
            } else if (data > current.data) {
                if (current.right) {
                    current = current.right
                }
                else { current.right = new Node(data)
                    break }
            }
        }
    }

    _contains(data) {
        if (this.data === data) return this
        let current = this

        while (current.left || current.right) {
            if (data > current.data) { 
                current = current.right
            } else if (data < current.data)  { 
                current = current.left
            }
            if (current.data === data) return current
        }
        return null
    }

    /**
     * return node with given data or null
     * if not found.
     * Course Solution
     * @param {any} data data to search for
     */
    contains(data) {
        if (this.data === data) return this

        if (data > this.data && this.right) { 
            return  this.right.contains(data) 
        } else if (data < this.data && this.left) {
            return this.left.contains(data)
        }
        return null      
    }
}

module.exports = Node;
