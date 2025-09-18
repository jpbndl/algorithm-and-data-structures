# Data Structures

## Arrays vs Lists Comparison

### Lists
- **No indexes** - Elements are not indexed
- **Node connections** - Connected via nodes with a next pointer
- **No random access** - Cannot jump to specific positions

### Arrays
- **Indexed order** - Elements have numbered positions
- **Expensive operations** - Insertion and deletion can be costly
- **Quick access** - Can instantly access any element by index

---

## Singly Linked List

A linked list is a connection of nodes where each node points to the next.

### Big O Complexity
- **Insertion:** O(1)
- **Removal:** O(1) or O(N)
- **Searching:** O(N)
- **Access:** O(N)

---

## Stacks

**LIFO Principle:** Last In, First Out

The last element added is the first one removed. Think of a pile of plates or function calls.

```javascript
function factorial(x) {
    if (x === 0) return 1;
    return x * factorial(x-1);
}
```

### Call Stack Breakdown: `factorial(3)`

```
Call Stack (LIFO):
┌─────────────────┐
│ factorial(0)    │ ← Returns 1 (base case)
├─────────────────┤
│ factorial(1)    │ ← Returns 1 × factorial(0) = 1
├─────────────────┤
│ factorial(2)    │ ← Returns 2 × factorial(1) = 2
├─────────────────┤
│ factorial(3)    │ ← Returns 3 × factorial(2) = 6
└─────────────────┘
```

**Step-by-step execution:**
1. `factorial(3)` calls `factorial(2)` - added to stack
2. `factorial(2)` calls `factorial(1)` - added to stack  
3. `factorial(1)` calls `factorial(0)` - added to stack
4. `factorial(0)` returns 1 - removed from stack
5. `factorial(1)` returns 1 × 1 = 1 - removed from stack
6. `factorial(2)` returns 2 × 1 = 2 - removed from stack
7. `factorial(3)` returns 3 × 2 = 6 - removed from stack

### Common Stack Uses
- **Function calls** - Managing function invocations
- **Undo/Redo** - Text editors, image editing
- **Browser history** - Back/forward navigation

### Big O Complexity
- **Insertion:** O(1)
- **Removal:** O(1)
- **Searching:** O(N)
- **Access:** O(N)

---

## Queues

**FIFO Principle:** First In, First Out

The first element added is the first one removed. Think of waiting in line at a restaurant.

### Common Queue Uses
- **Background tasks** - Processing tasks in order
- **Resource uploading** - Files processed one after another
- **Print queue** - Documents printed in order received

### Big O Complexity
- **Insertion:** O(1)
- **Removal:** O(1)
- **Searching:** O(N)
- **Access:** O(N)

---

## Trees

### What is a Tree?

A data structure that consist of nodes in a parent / child relationship. 

**Tree terminology**
- **Root** - The top node in a tree
- **Parent** - A node that has one or more child nodes connected to it.
- **Child** - A node directly connected to another node when moving away from the Root.
- **Siblings** - A group of nodes with the same parent.
- **Leaf** - A node with no children. 
- **Edge** - The connection between one node and another

### Kind of Trees
- **Trees**
- **Binary Trees**
- **Binary Search Trees**

### Lists vs Trees

Lists are linear - just one path
Trees are non-linear - there are many different paths

### Common Tree Uses
- HTML Dom
- Network Routing
- Artificial Intelligence
- File directory
- File System

---

## Binary Search Trees

Is a type of a tree that follows: 

- Every parent node has at most **two** children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater that the parent

```
Sample Binary Tree Structure:
        10
       /  \
      6    15
     / \   / \
    3   8 11  20
```

**Sample Tree Terminology:**
- **Root:** Top node (10)
- **Parent:** Node with children (10, 6, 15)
- **Child:** Node connected below (6, 15 are children of 10)
- **Leaf:** Node with no children (3, 8, 11, 20)
- **Siblings:** Nodes with same parent (6 and 15)

### Big O Complexity
- **Insertion:** O(log n) (Not guaranteed. For example, a one-sided tree)
- **Searching:** O(log n) (Not guaranteed. For example, a one-sided tree)

---

## Tree Traversal

Visiting every node in a tree exactly once in a systematic way.

### Main Approaches in Tree Traversal

```
Sample Binary Tree Structure:
        10
       /  \
      6    15
     / \   / \
    3   8 11  20
```

#### Breadth-First Search (BFS)
**Level by level traversal** - Visit all nodes at the same level before moving to the next level.

**Order:** 10 → 6 → 15 → 3 → 8 → 11 → 20

**How it works:**
1. Start at root (10)
2. Visit all level 1 nodes (6, 15)
3. Visit all level 2 nodes (3, 8, 11, 20)

#### Depth-First Search (DFS)
**Go deep first** - Traverse to the deepest node before backtracking.

### DFS Traversal: The Power of `data.push()` Position

The **position** of `data.push(node.value)` determines the traversal order:

#### Pre-Order (Root → Left → Right)
```javascript
const traverse = function(node) {
    data.push(node.value);                // ← PUSH FIRST
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
}
```
**Result:** [10, 6, 3, 8, 15, 11, 20] - Process root before children

#### In-Order (Left → Root → Right)
```javascript
const traverse = function(node) {
    if (node.left) traverse(node.left);
    data.push(node.value);                // ← PUSH MIDDLE
    if (node.right) traverse(node.right);
}
```
**Result:** [3, 6, 8, 10, 11, 15, 20] - **Sorted order for BST!**

#### Post-Order (Left → Right → Root)
```javascript
const traverse = function(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.value);                // ← PUSH LAST
}
```
**Result:** [3, 8, 6, 11, 20, 15, 10] - Process children before root

### How Recursion "Goes Back"

When a recursive function finishes, JavaScript **automatically returns** to where it was called from using the call stack. Each function "remembers" exactly where it left off - no manual "going back" required!

**Key Insight:** The call stack handles all the complexity of remembering function states and returning to the correct position after each recursive call completes.

### When to use BFS or DFS?

Time complexity for BFS and DFS. But for space complexity, it may differ but:

BFS - space complexity could be a lot more since we are storing the "data" temporarily in the memory. For instance, imagin a tree is hunder level deep.

DFS - unlike BFS, we do not store the "data" temporarily.
- **In-order** - good when you want to have a data or nodes sorted in order, from lowest to highest.
- **Pre-order** - good when you want to make a flatten copy or duplicate the tree.

## Binary Heaps

Is a type of **tree**. Similar to a binary search tree, but with some different rules.

- MaxBinaryHeap - parent nodes are always larger than child nodes. 
- MinBinaryHeap - parent nodes are always smaller than child nodes.

### Binary Heap Rules

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

### Sample Binary Heap

```
Max Binary Heap:
        41
       /  \
      39   33
     / \   / \
    18 27 12  55

Array representation: [41, 39, 33, 18, 27, 12, 55]
Index:                 0   1   2   3   4   5   6
```

**Key Properties:**
- **Root (41)** is the maximum value
- **Parent ≥ Children**: 41 > 39,33 | 39 > 18,27 | 33 > 12,55
- **No sibling order**: 39 and 33 have no specific relationship
- **Left-filled**: All levels filled left to right

### Array-Based Storage

Binary heaps are stored in arrays using these formulas:

**For any index n:**
- **Left child:** `2n + 1`
- **Right child:** `2n + 2`  
- **Parent:** `Math.floor((n-1)/2)`

**Example:**
- Index 1 (value 39): Left child at index 3 (18), Right child at index 4 (27)
- Index 3 (value 18): Parent at index 1 (39)