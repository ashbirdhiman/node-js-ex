//console.log("Hello, World!");

// function add(a,b) {
//     return a + b;
// }


//Create a module and export it

// var fs=require('fs');

// // fs.writeFile(
// //   "calc.js",
// //   `
// // exports.add = function add(a, b) {
// //     return a + b;
// // }
// //     exports.sub = function add(a, b) {
// //     return b-a;
// // }
    
// // `,

// //   function (err) {
// //     if (err) throw err;
// //     console.log("File is created successfully.");
// //   }
// // );

//Append to the file calc.js
// fs = require('fs');
// fs.appendFile(
//   "calc.js",
//   `exports.multiply = function add(a, b) {
//     return a * b;   
// }`
//     , function (err) {   
//         if (err) throw err;
//         console.log("File is created successfully.");
//     }
// );

// //Create a file to delete
// fs.writeFile(
//   "fileToDelete.js",
//   `console.log("Hello, World!");`
//     , function (err) {    
//         if (err) throw err;
//         console.log("File is created successfully.");
//     }
// );

// //delete the file
// fs.unlink("fileToDelete.js", function (err) {
//     if (err) throw err;
//     console.log("File deleted successfully.");
// }      ) 


var calc = require('./calc.js');

result = calc.add(5, 3);
console.log(result); // Output: 8
