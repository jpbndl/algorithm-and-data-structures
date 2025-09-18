/**
 * Traversing any tree that has any number of nodes and in any order
 */
const { out } = require('../Utils/output');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } 

        let current = this.root;
        while(true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    /**
     * Psuedocode
     * 1. Create a queue (this can be array) and a variable to store the values of nodes visited
     * 2. Place the root node in the queue
     * 3. Loop as long as there is anything in the queue
     *      3a. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
     *      3b. If there is a left property on the node dequeued - add it to the queue
     *      3c. If there is a right property on the node dequeued - add it to the queue
     * 4. Return the variable that stores the values
     */
    BFS() {
        let node = this.root;
        if (node === null) return undefined;

        let data = [];
        let queue = [];

        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    /**
     * Psuedocode
     * 1. Create a variable to store the values of nodes visited
     * 2. Store the root of the BST in a variable called current
     * 3. Write a helper function which accepts a node
     *      3a. Push the value of the node to the variable that stores the values
     *      3b. If the node has a left property, call the helper function with the left property on the node
     *      3c. If the node has a right property, call the helper function with the right property on the node
     * 4. Invoke the helper function with the current variable
     * 5. Return the array of values
     */ 
    DFSPreOrder() {
        let current = this.root;
        if (current === null) return undefined;

        let data = [];
        const traverse = function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }

    /**
     * Psuedocode
     * 1. Create a variable to store the values of nodes visited
     * 2. Store the root of the BST in a variable called current
     * 3. Write a helper function which accepts a node
     *      3a. If the node has a left property, call the helper function with the left property on the node
     *      3b. If the node has a right property, call the helper function with the right property on the node
     *      3c. Push the value of the node to the variable that stores the values
     *      3d. Invoke the helper function with the current variable
     * 4. Return the array of values
     */
    DFSPostOrder() {
        let current = this.root;
        if (current == null) return undefined;

        let data = [];
        const traverse = function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);
        return data;
    }

    /**
     * Psuedocode
     * 1. Create a variable to store the values of nodes visited
     * 2. Store the root of the BST in a variable called current
     * 3. Write a helper function which accepts a node
     *      3a. If the node has a left property, call the helper function with the left property on the node
     *      3b. Push the value of the node to the variable that stores the values
     *      3c. If the node has a right property, call the helper function with the right property on the node
     * 4. Invoke the helper function with the current variable
     */
    DFSInOrder() {
        let current = this.root;
        if (current === null) return undefined;

        let data = [];
        const traverse = function traverse(node) {
            if (node.left) traverse(node.left)
            data.push(node.value);
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return data;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// out(bst.BFS(), 'bst-bfs.json', true);
out(bst.DFSPreOrder());
out(bst.DFSPostOrder());