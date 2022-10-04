/* Problem 8 */
/* Given a number, count how many numbers below it are multiples of EITHER 3 OR 5
Then, sum those multiples together
Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23 */

console.log(`
/* Problem 8 */
/* Given a number, count how many numbers below it are multiples of EITHER 3 OR 5
Then, sum those multiples together
Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23 */

const sumMultiples = n => {
    let count = 0;
    while(n--) {
        if(n % 3 === 0 || n % 5 === 0) {
            count += n; 
        } 
    }
    return count;
}

console.log(sumMultiples(20));
console.log(sumMultiples(200));
console.log(sumMultiples(2000));
console.log(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18);
`)

const sumMultiples = n => {
    let count = 0;
    while(n--) {
        if(n % 3 === 0 || n % 5 === 0) {
            count += n; 
        } 
    }
    return count;
}

console.log(sumMultiples(20));
console.log(sumMultiples(200));
console.log(sumMultiples(2000));
console.log(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18);