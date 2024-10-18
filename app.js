// app.js
import multiplyNums, { addNums, subtractNums } from './mathModule.js';
import { textToUpperCase, textToLowerCase } from './stringModule.js';

// Call the functions and log results (your choice of arguments)
console.log('Add on 5 & 3  :', addNums(5, 3));  // Test your add function
console.log('Uppercase on   hello : ', textToUpperCase('hello'));  // Test string manipulation

import { addAndLogUpper } from './mathModule.js';
console.log("add and log upper on 10, 20 :")
addAndLogUpper(10, 20);  // Test the new function 

console.log('Multiply on  4 & 5 ', multiplyNums(4, 5));  // Test the default export

import { findMaxandMultiply } from './mathModule.js';

let myarr = [1, 3, 24, 5, 35, 6, 3]

console.log("find max in array and multiplying it with 5")

findMaxandMultiply(myarr, 5)


import { findMax, reverseArray } from './arrayModule.js';


console.log('Reversed: ', reverseArray(myarr));  // Test reverseArray