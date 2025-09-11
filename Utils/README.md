# Utils

Utility functions for the Algorithm and Data Structures project.

## output.js

JSON output helper for visualizing data structures.

### Usage

```javascript
const { out } = require('../Utils/output');
```

### Functions

#### `out(value, filename, openFile)`

Outputs data structures as formatted JSON.

**Parameters:**
- `value` (Object) - The data structure to output
- `filename` (string, optional) - Name of output file (default: empty string)
- `openFile` (boolean, optional) - Whether to open file in VS Code (default: false)

**Examples:**

```javascript
// Console output only (default)
out(myBST);

// Save to file without opening
out(myBST, 'binary-tree.json');

// Save to file and open in VS Code
out(myBST, 'binary-tree.json', true);
```

### Features

- **Console display** - Pretty-printed JSON with 2-space indentation
- **File output** - Saves to `out/` directory (created automatically)
- **VS Code integration** - Opens files in new tabs using `--reuse-window`
- **Error handling** - Graceful fallback if VS Code can't open files

### Output Directory

All generated JSON files are saved to the `out/` directory in the project root for easy access and version control exclusion.