# Algorithm and Data Structures

A collection of JavaScript implementations for learning algorithms and data structures concepts.

## Setup

This project uses JavaScript files that can be executed using the Code Runner extension in VS Code.

### Prerequisites
- Node.js installed on your system
- VS Code with Code Runner extension

### Running Scripts
1. Open any `.js` file in VS Code
2. Press `Ctrl+Alt+N` (or `Cmd+Alt+N` on Mac) to run the script
3. Or right-click and select "Run Code"

## Project Structure

```
algorithm-and-data-structures/
├── BigONotation/
│   ├── README.md          # Big O concepts and examples
│   └── Sample.js          # Performance comparison examples
├── DataStructures/
│   ├── README.md          # Data structures overview
│   ├── 1. SinglyLinkedList.js
│   ├── 2. Stacks.js       # Stack implementation with arrays
│   ├── 3. Queues.js       # Queue implementation
│   └── 4. BinaryTrees.js  # Binary Search Tree
├── ES2015/
│   ├── Basic.js           # ES6+ syntax examples
│   └── Point.js           # Class examples
├── Utils/
│   └── output.js          # JSON output helper
├── out/                   # Generated JSON files
└── README.md
```

## Topics Covered

- **ES2015+**: Modern JavaScript syntax and features
- **Data Structures**: Arrays, Objects, Sets, Maps, etc.
- **Algorithms**: Sorting, searching, and problem-solving techniques

## Usage

Each JavaScript file contains practical examples and implementations. Simply navigate to any file and run it using Code Runner to see the output and understand the concepts.

### JSON Output Helper

The project includes a utility for outputting data structures as JSON:

```javascript
const { out } = require('../Utils/output');

// Console output only (default behavior)
out(dataStructure);

// Save to file without opening
out(dataStructure, 'filename.json');

// Save to file and open in VS Code
out(dataStructure, 'filename.json', true);
```

Generated JSON files are saved in the `out/` directory for easy inspection and analysis.

## Learning Resources

- Practice implementations
- Code examples with explanations
- Hands-on exercises for algorithm and data structure concepts