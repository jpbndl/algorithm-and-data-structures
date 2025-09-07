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