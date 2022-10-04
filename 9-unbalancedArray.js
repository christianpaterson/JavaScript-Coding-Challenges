/* Problem 9 */
/* Given an array of positive and negative integers, find the number that does not have an opposite
Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5
Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12] */

console.log(`
/* Problem 9 */
/* Given an array of positive and negative integers, find the number that does not have an opposite
Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5
Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12] */

const unbalancedArray = nums => {
    //Absolute value all elements
    let evenArray = nums.map(num => Math.abs(num));
    //Find all repeated values
    repeatArray = evenArray.filter(function(item, position) {
        return evenArray.indexOf(item) !== position;
        //At duplicate position !== (first) indexOf
    })
    //Remove repeats
    for (let i = 0; i < (evenArray.length/2); i++) {
        for (repeatEl of repeatArray) {
            evenArray.splice(evenArray.indexOf(repeatEl), 1);
        }
    }
    return evenArray[0];
}


const unbalancedArrayClever = nums => nums.reduce((sum, num) => sum + num);

console.log(unbalancedArray([12, 1, 21, -21, -1]));
console.log(unbalancedArray([12,1,14,-21,-1,22,21,-14,-22]));
console.log(unbalancedArray([-1,4,1,5,-4]));

console.log(unbalancedArrayClever([12, 1, 21, -21, -1]));
console.log(unbalancedArrayClever([12,1,14,-21,-1,22,21,-14,-22]));
console.log(unbalancedArrayClever([-1,4,1,5,-4]));
`)

const unbalancedArray = nums => {
    //Absolute value all elements
    let evenArray = nums.map(num => Math.abs(num));
    //Find all repeated values
    repeatArray = evenArray.filter(function(item, position) {
        return evenArray.indexOf(item) !== position;
        //At duplicate position !== (first) indexOf
    })
    //Remove repeats
    for (let i = 0; i < (evenArray.length/2); i++) {
        for (repeatEl of repeatArray) {
            evenArray.splice(evenArray.indexOf(repeatEl), 1);
        }
    }
    return evenArray[0];
}


const unbalancedArrayClever = nums => nums.reduce((sum, num) => sum + num);

console.log(unbalancedArray([12, 1, 21, -21, -1]));
console.log(unbalancedArray([12,1,14,-21,-1,22,21,-14,-22]));
console.log(unbalancedArray([-1,4,1,5,-4]));

console.log(unbalancedArrayClever([12, 1, 21, -21, -1]));
console.log(unbalancedArrayClever([12,1,14,-21,-1,22,21,-14,-22]));
console.log(unbalancedArrayClever([-1,4,1,5,-4]));