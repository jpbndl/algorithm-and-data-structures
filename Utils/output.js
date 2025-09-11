/**
 * JSON Output Utility for Data Structures
 * 
 * This module provides helper functions to output JavaScript data structures
 * as formatted JSON, either to console or to files with optional VS Code integration.
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/**
 * Main output function for data structures
 * 
 * @param {Object} value - The data structure to output (e.g., BST, Stack, Queue)
 * @param {string} filename - Name of the output file (default: empty string)
 * @param {boolean} openFile - Whether to open file in VS Code (default: false)
 * 
 * @example
 * // Console output only
 * out(myBST);
 * 
 * @example
 * // Save to file without opening
 * out(myBST, 'binary-tree.json');
 * 
 * @example
 * // Save to file and open in VS Code
 * out(myBST, 'binary-tree.json', true);
 */
function out(value, filename = '', openFile = false) {
   if (filename)  {
        let outputPath = outputToFile(value, openFile, filename);
        if (openFile) openFile(outputPath);
   }
   console.log(JSON.stringify(value, null, 2));
}

/**
 * Saves data structure to JSON file and optionally opens in VS Code
 * 
 * @param {Object} value - The data structure to save
 * @param {string} filename - Name of the output file
 * 
 * Features:
 * - Creates 'out/' directory if it doesn't exist
 * - Saves formatted JSON with 2-space indentation
 * - Attempts to open file in VS Code using --reuse-window flag
 * - Provides fallback instructions if auto-open fails
 */
function outputToFile(value, filename) {
    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '..', 'out');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write formatted JSON to file
    const filePath = path.join(outputDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
    console.log(`Data saved to ${filePath}`);

    return filePath;
}

function openFile(filePath) {
    exec(`code --reuse-window "${filePath}"`, (error) => {
        if (error) {
            console.log(`File saved to: ${filePath}`);
            console.log('Could not auto-open. Manually open from Explorer panel.');
        } else {
            console.log('File opened in VS Code tab');
        }
    });
}

// Export the main function using CommonJS
module.exports = { out };