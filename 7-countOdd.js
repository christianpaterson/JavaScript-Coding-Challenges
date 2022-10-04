/* Problem 7 */
/* Given a number, count how many odd numbers are below that number
Ex: countOdd(10) -> 1, 3, 5, 7, 9 -> returns 5
Ex: countOdd(5) -> 1, 3 -> returns 2 */

console.log(`
/* Problem 7 */
/* Given a number, count how many odd numbers are below that number
Ex: countOdd(10) -> 1, 3, 5, 7, 9 -> returns 5
Ex: countOdd(5) -> 1, 3 -> returns 2 */

const countOdd = n => {
    let lessThanArray = [];
    while(n--) {
        lessThanArray.push(n);
    }
    let odds = lessThanArray.filter(el => el % 2 !== 0);
    return odds.length;
}

const countOddEasy = n => Math.floor(n/2);

console.log(countOdd(10531));
console.log(countOddEasy(10531));
`)

const countOdd = n => {
    let lessThanArray = [];
    while(n--) {
        lessThanArray.push(n);
    }
    let odds = lessThanArray.filter(el => el % 2 !== 0);
    return odds.length;
}

const countOddEasy = n => Math.floor(n/2);

console.log(countOdd(10531));
console.log(countOddEasy(10531));