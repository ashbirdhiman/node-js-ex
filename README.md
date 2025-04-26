# Node.js Calculator Example

A simple Node.js project demonstrating module exports and basic arithmetic operations.

## Features

- Basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication

## Project Structure

- `app.js` - Main application file that uses the calculator module
- `calc.js` - Calculator module with arithmetic functions

## Usage

```javascript
const calc = require('./calc.js');

// Addition
calc.add(5, 3);     // Returns: 8

// Subtraction
calc.sub(3, 5);     // Returns: 2

// Multiplication
calc.multiply(4, 2); // Returns: 8
```

## Installation

1. Clone the repository
2. Make sure Node.js is installed
3. Run the example:
   ```bash
   node app.js
   ```

