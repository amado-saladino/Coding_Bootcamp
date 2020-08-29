// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {       
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        let current = this.head
        while (current) {
            counter++
            current = current.next
        }
        return counter
    }

    getFirst() {
        return this.head
        /**
         * code reuse
         return this.getAt(0)
         */
    }

    getLast() {
        let node = this.head
        if (!node) return null

        while (node.next) {
            node = node.next
        }
        return node

        /**
         * code resue
         return this.getAt(this.size() -1)
         */
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) return;
        if (this.size() ===1 ) { // if (!this.head.next)
            this.head = null
            return;
        }
        
        let node = this.head, last = null
        while (node.next) {
            last = node
            node = node.next
        }
        last.next = null
        
        /* 
        let node = this.head.next
        let last = this.head

        while (node.next) {
            last = node
            node = node.next
        }
        last.next = null 
        */
    }

    insertLast(data) {
        if (this.size() === 0) {
            this.head = new Node(data)
        } else {
            this.getLast().next = new Node(data)
        }

        /* 
        * course solution
        const last = this.getLast()
        if (last) { last.next = new Node(data) }
        else { this.head = new Node(data) } 
        */
    }

    getAt(index) {
        if (index > this.size() -1 || index < 0) return null

        let node = this.head
        let counter = 0

        while (counter < index) {
            node = node.next
            counter++
        }
        return node
        
        /** course solution
            while (node) {
                if (counter === index) return node
                counter++
                node = node.next
            }
            return null
         */
    }

    removeAt(index) {
        const node = this.getAt(index)
        const previous = this.getAt(index -1)
        const next = this.getAt(index +1)

        if (node) {
            if (previous) {
                previous.next = next
            } else {
                this.head = next
            }
        }

        /**
         * course solution
         if (!this.head) return;
 
         if (index === 0) {
             this.head = this.head.next
             return
         }
         
         const previous = this.getAt(index -1)
         if (!previous || !previous.next) return
         previous.next = previous.next.next
         */
    }

    insertAt(data, index) {
        const node = new Node(data)
        const prev = this.getAt(index -1)

        if (!prev && !this.getAt(index +1)) {
            this.insertLast(data)
            return
        }

        if (!prev) {
            const head = this.head
            this.head = node
            node.next = head
            return
        } else {
            const next = this.getAt(index) 
            this.getAt(index -1).next = node
            node.next = next
            return
        }

        /**
         * course solution
         if (!this.head) {
             this.head = new Node(data)
             return
         }
 
         if (index === 0) {
             this.head = new Node(data, this.head)
             return
         }
 
         const previous = this.getAt(index -1) || this.getLast()
         const node = new Node (data, previous.next)
         previous.next = node
         */
    }
    
    forEach(callback) {
        let node = this.head  //this.getAt(0)
        let counter = 0
        while (node) {
            callback(node, counter)
            node = node.next  //node = this.getAt(++counter)
            counter++
        }
    }
    
    *[Symbol.iterator]() {
        let node = this.head  //this.getAt(0)
        while (node) {
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
