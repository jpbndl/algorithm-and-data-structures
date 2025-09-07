/**
 * Queue Implementation using JavaScript Array and Custom Class
 * Demonstrates FIFO (First In, First Out) principle
 */

// Method 1: Using Array (less efficient)
let q = [];

// Adding to end, removing from beginning (FIFO)
q.push("1");        // Queue: ["1"]
q.push("2");        // Queue: ["1", "2"]
q.push("3");        // Queue: ["1", "2", "3"]

console.log(q.shift()); // Output: "1" - Queue: ["2", "3"]
console.log(q.shift()); // Output: "2" - Queue: ["3"]
console.log(q.shift()); // Output: "3" - Queue: []

// Adding to beginning, removing from end (FIFO)
q.unshift("4");     // Queue: ["4"]
q.unshift("5");     // Queue: ["5", "4"]
q.unshift("6");     // Queue: ["6", "5", "4"]

console.log(q.pop()); // Output: "4" - Queue: ["6", "5"]
console.log(q.pop()); // Output: "5" - Queue: ["6"]
console.log(q.pop()); // Output: "6" - Queue: []

/**
 * Node class for linked list implementation
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Queue class using linked list (more efficient)
 * - enqueue: Add to the end (last)
 * - dequeue: Remove from the beginning (first)
 * - Both operations are O(1)
 */
class Queue {
    constructor() {
        this.first = null;  // Points to the front of the queue
        this.last = null;   // Points to the back of the queue
        this.size = 0;      // Number of elements in queue
    }

    /**
     * Add element to the back of the queue
     * @param {*} value - Value to add to queue
     * @returns {number} - New size of queue
     * 
     * Pseudocode:
     * 1. Create a new node using the value
     * 2. If queue is empty, set first and last to new node
     * 3. Otherwise, link current last to new node and update last
     * 4. Increment size and return it
     */
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    /**
     * Remove element from the front of the queue
     * @returns {*} - Value of removed element or null if empty
     * 
     * Pseudocode:
     * 1. If queue is empty, return null
     * 2. Store reference to first node
     * 3. If only one node, set both first and last to null
     * 4. Otherwise, move first to next node
     * 5. Decrement size and return removed value
     */
    dequeue() {
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

// Method 2: Using custom Queue class (recommended)
q = new Queue();

q.enqueue("1");     // Queue: first -> "1" <- last
q.enqueue("2");     // Queue: first -> "1" -> "2" <- last
q.enqueue("3");     // Queue: first -> "1" -> "2" -> "3" <- last

console.log(q.dequeue()); // Output: "1" - Queue: first -> "2" -> "3" <- last
console.log(q.dequeue()); // Output: "2" - Queue: first -> "3" <- last
console.log(q.dequeue()); // Output: "3" - Queue: empty