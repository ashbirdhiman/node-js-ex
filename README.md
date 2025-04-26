# Node.js Calculator Example

A simple Node.js project demonstrating module exports, basic arithmetic operations, and a REST API server.

## Features

- Basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
- REST API endpoints for calculations
- File system operations examples
- Module exports demonstration

## Project Structure

- `app.js` - Main application file demonstrating calculator module usage
- `calc.js` - Calculator module with arithmetic functions
- `server.js` - Express server providing REST API endpoints
- `package.json` - Project dependencies

## Usage

### Module Usage
```javascript
const calc = require('./calc.js');

// Addition
calc.add(5, 3);     // Returns: 8

// Subtraction
calc.sub(3, 5);     // Returns: 2

// Multiplication
calc.multiply(4, 2); // Returns: 8
```

### REST API Endpoints
- GET `/` - Returns "Hello World!"
- GET `/add/:a/:b` - Returns sum of two numbers

Example:
```
http://localhost:3000/add/5/3
// Returns: The sum is 8
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the calculator example:
   ```bash
   node app.js
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   Server will run on port 3000

## Dependencies

- Express.js - Web application framework
