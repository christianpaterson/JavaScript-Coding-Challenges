/* Problem 3 */
/* Given an array of numbers, add together the positive nums & return the sum
Ex. sumOfPositive([1, -2, 3, 4]), returns 8
If no numbers are positive, return 0 */

console.log(`
/* Problem 3 */
/* Given an array of numbers, add together the positive nums & return the sum
Ex. sumOfPositive([1, -2, 3, 4]), returns 8
If no numbers are positive, return 0 */

const sumOfPositive = nums => nums.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
console.log(sumOfPositive([-1, -5, 0, 3, 6, 7, 0, 9, 294, -8, 1, 22]));
console.log(sumOfPositive([1,-2,3,4,5,6,7,8,9]));
console.log(sumOfPositive([-2,-5,-10,-1,-144]));
`)

const sumOfPositive = nums => nums.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
console.log(sumOfPositive([-1, -5, 0, 3, 6, 7, 0, 9, 294, -8, 1, 22]));
console.log(sumOfPositive([1,-2,3,4,5,6,7,8,9]));
console.log(sumOfPositive([-2,-5,-10,-1,-144]));