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
    /**
     * Psuedocode
     * 1. Create a new node
     * 2. Starting at root
     * 3. Check if there is a root, if not, root = new node
     * 4. If there is a root, check if value of new node is > or < root
     * 5. If greater, check if there is a node to right
     *      5a. If there is, move to that node and repeat step 4
     *      5b. If there is not, add that node as the right property
     * 6. If less, check if there is a node to left
     *      6a. If there is, move to that node and repeat step 4
     *      6b. If there is not, add that node as the left property
     */
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
     * 1. Starting at the root
     * 2. Check if there is a root, it not - we're done searching
     * 3. If there is a root, check if the value of the new node is the value we are looking for,
     *    if found, we are done.
     * 4. If not, check to see if the value is greater than or less than the value of the root
     *    4a. If it is greater, check to see if there is a node to the right
     *        - If there is, move to that node and repeat theses steps
     *        - If there is not, we are done searching.
     *    4b. If it is less, check to see if there is a node to the left
     *        - If there is, move to that node and repeat these steps
     *        - If there is not, we are done searching.
     */
    find(value) {
        if (!this.root) return undefined;

        let current = this.root;
        while (current) {
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return undefined;
    }
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(16);
bst.insert(7);
bst.insert(2);

//out(bst, true, 'bst-insert.json')
out(bst.find(11));
/**
 * Sample 1
 */
// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// console.log(tree);
