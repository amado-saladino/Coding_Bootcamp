// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.head
    let fast = list.head
    
    //move fast by n steps
    /**
     * loop used in course
     while (n > 0) {
         fast = fast.next
         n--
     }
     */

    for (let index = 0; index < n; index++) {
        fast = fast.next        
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}


/* function fromLast(list, n) {
    let pointer = list.head
    let node = list.head
    
    while (pointer.next) {
        for (let index = n; index >= 0; index--) {
            if (pointer.next) {                
                pointer = pointer.next
            } else {
                return node
            }            
        }
        if (!pointer.next) { 
            node = node.next
            return node
        }
        node = pointer
    }
} */

module.exports = fromLast;
