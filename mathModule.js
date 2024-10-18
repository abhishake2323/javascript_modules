// mathModule.js
export function addNums(a, b) { return a+b; }
export function subtractNums(a, b) { return a-b; }
 
export default  function multiplyNums(a, b) { return a*b; }
import { textToUpperCase  } from './stringModule.js';
export function addAndLogUpper(a, b) {
    const result = addNums(a, b);
    console.log(textToUpperCase(result.toString()));
}


 
import { findMax } from './arrayModule.js' ;


export function findMaxandMultiply(arr , numToMultiply) {
    const result = findMax(arr) * numToMultiply;
    
    console.log(textToUpperCase(result.toString()));
}
 