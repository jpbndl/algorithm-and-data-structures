/**
 * Linked list is a connection of nodes
 * 

*/
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

      /** 
     *  Pseudocode
     * 1. This function should accept a value
     * 2. Create a new node using the value passed to the function
     * 3. If there is no head property on the list, set the head and tail to be the newly created node
     * 4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
     * 5. Increment the length by one
     * 6. Return the linked list
    */
    push(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }
    /**
     * Psuedocode
     * 1. If there are no nodes in the list, return undefined
     * 2. Loop through the list until you reach the tail
     * 3. Set the next property of the 2nd to last node to be null
     * 4. Set the tail to be the 2nd to last node
     * 5. Decrement the length of the list by 1
     * 6. Return value of the node removed
     */
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    /**
     * Psuedocode
     * 1. If there are no nodes, return undefined
     * 2. Store the current head property in a variable
     * 3. Set the head property to be the current head's next property
     * 4. Decrement the length by 1
     * 5. Return the value of the node removed
     */
    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        return currentHead;
    }

    /**
     * Pseudocode
     * This function should accept a value
     * Create a new node using the value passed to the function
     * If there is no head property on the list, set the head and tail to be the newly created node
     * Otherwise set the newly created node's next property to be the current head property on the list
     * Set the head property on the list to be that newly created node
     * Increment the length of the list by 1
     * Return the linked list
     */
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    /**
     * Pseudocode
     * 1. This function should accept an index
     * 2. If the index is less than zero or greater than or equal to the length of the list, return null
     * 3. Loop through the list until you reach the index and return the node at that specific index
     */
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index) return current;
            current = current.next;
        }
    }

    /**
     * Pseudocode
     * 1. This function should accept a value and an index
     * 2. Use your get function to find the specific node.
     * 3. If the node is not found, return false
     * 4. If the node is found, set the value of that node to be the value passed to the function and return true
     */
    set(index, value) {
        let foundNode = this.get(index);
        if (!foundNode) return false;

        foundNode.value = value;
        return true
    }

    /**
     * Pseudocode
     * 1. If the index is less than zero or greater than the length, return false
     * 2. If the index is the same as the length, push a new node to the end of the list
     * 3. If the index is 0, unshift a new node to the start of the list
     * 4. Otherwise, using the get method, access the node at the index - 1
     * 5. Set the next property on that node to be the new node
     * 6. Set the next property on the new node to be the previous next
     * 7. Increment the length
     * 8. Return true
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        
        let newNode = new Node(value);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    /**
     * Pseudocode
     * 1. if the index is less than zero or greater than or equal to the length, return undefined
     * 2. If the index is the same as the length-1, pop
     * 3. If the index is 0, shift
     * 4. Otherwise, using the get method, access the node at the index - 1
     * 5. Set the next property on that node to be the next of the next node
     * 6. Decrement the length
     * 7. Return the value of the node removed
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        let node = this.get(index-1);
        let removed = node.next;
        node.next = removed.next;
        this.length--;
        return removed;
    }

    /**
     * Pseudocode
     * 1. Swap the head and the tail
     * 2. Create a variable called next
     * 3. Create a variable called prev
     * 4. Create a variable called node and initialize it to the head property
     * 5. Loop through the list
     * 6. Set next to be the next property on whatever node is 
     * 7. Set the prev to be the value of the node variable
     * 8. Set the node variable to be the value of the next variable 
     */
    reverse() {
        if (!this.head && !this.tail) return;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null; 
        let prev = null;
        
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
    
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");
list.push("!");
console.log(list.reverse());
console.log(list.print())