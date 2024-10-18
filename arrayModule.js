// arrayModule.js
export function findMax(arr) {

    let maxval = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > maxval) {
            maxval = arr[index];
        }
    }
    console.log(`Max value from ${arr} is ${maxval}`)
    return maxval
}
export function reverseArray(arr) { return arr.reverse() }