/* Problem 4 */
/* Given 2 numbers, multiply them WITHOUT THE * OPERATOR!
ex multiplyNumbers(2, 5) returns 10 */

console.log(`
/* Problem 4 */
/* Given 2 numbers, multiply them WITHOUT THE * OPERATOR!
ex multiplyNumbers(2, 5) returns 10 */

const multiplyNumbers = (num1, num2) => {
    let sum = 0;
    while(num1--) { sum += num2; }
    return sum;
  }
  
  var multiplyNumbersClever = (num1, num2) => num1/(1/num2);
  
  console.log(multiplyNumbers(5, 10));
  console.log(multiplyNumbersClever(5, 10));
`)

const multiplyNumbers = (num1, num2) => {
  let sum = 0;
  while(num1--) { sum += num2; }
  return sum;
}

var multiplyNumbersClever = (num1, num2) => num1/(1/num2);

console.log(multiplyNumbers(5, 10));
console.log(multiplyNumbersClever(5, 10));