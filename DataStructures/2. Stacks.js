/**
 * Stack Implementation using JavaScript Array
 * Demonstrates LIFO (Last In, First Out) principle
 */
let stack = [];

// Method 1: Using push/pop (recommended for stacks)
// Adding to the end (LIFO)
stack.push("requested");     // Stack: ["requested"]
stack.push("acknowledged");  // Stack: ["requested", "acknowledged"]
stack.push("approved");      // Stack: ["requested", "acknowledged", "approved"]

// Removing from the end (LIFO)
console.log(stack.pop());    // Output: "approved" - Stack: ["requested", "acknowledged"]
console.log(stack.pop());    // Output: "acknowledged" - Stack: ["requested"]
console.log(stack.pop());    // Output: "requested" - Stack: []

// Method 2: Using unshift/shift (less efficient)
// Adding from the beginning 
stack.unshift("request");           // Stack: ["request"]
stack.unshift("for acknowledgement"); // Stack: ["for acknowledgement", "request"]
stack.unshift("for approval");       // Stack: ["for approval", "for acknowledgement", "request"]

// Removing from the beginning
console.log(stack.shift());  // Output: "for approval" - Stack: ["for acknowledgement", "request"]
console.log(stack.shift());  // Output: "for acknowledgement" - Stack: ["request"]
console.log(stack.shift());  // Output: "request" - Stack: []
/*
 * Why unshift/shift is inefficient:
 * 
 * unshift() - O(n) time complexity
 * - Must shift ALL existing elements one position to the right
 * - Example: [1,2,3] -> unshift(0) -> [0,1,2,3] (all elements moved)
 * 
 * shift() - O(n) time complexity  
 * - Must shift ALL remaining elements one position to the left
 * - Example: [0,1,2,3] -> shift() -> [1,2,3] (all elements moved)
 * 
 * push/pop - O(1) time complexity
 * - Only adds/removes from the end, no shifting required
 * - Example: [1,2,3] -> push(4) -> [1,2,3,4] (no elements moved)
 */

/**
 * Stack Implementation using Linked List
 * Preferred for large stacks due to constant time operations
 */ 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Pseudocode
     * 1. The function should accept a value
     * 2. Create a new node with that value
     * 3. If there are no nodes in the stack, set the first and last property to be the newly created node
     * 4. If there is at least one node, create a variable that stores the current first property on the stack
     * 5. Reset the first property to be the newly created node
     * 6. Set the next property on the node to be the previously created variable
     * 7. Increment the size of the stack by 1
     */
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    /**
     * Pseudocode
     * 1. If there are no nodes, return null
     * 2. Create a temporary variable to store the first property on the stack
     * 3. If there is only 1 node, set the first and last property to be null
     * 4. If there is more than one node, set the first property to be the next property on the current first
     * 5. Decrement the size by 1
     * 6. Return the value of the node removed
     */
    pop() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack2 = new Stack();

console.log(stack2.push("FIRST"));
console.log(stack2.push("SECOND"));
console.log(stack2.push("THIRD"));

console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());