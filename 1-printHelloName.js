/* Problem 1 */
/* Create a string to say hello in the format: "Hello, {{ name }}!
Ex. printHelloName("Aaron"), returns "Hello, Aaron!" */

console.log(`
/* Problem 1 */
/* Create a string to say hello in the format: "Hello, {{ name }}!
Ex. printHelloName("Aaron"), returns "Hello, Aaron!" */

const printHelloName = firstName => "Hello, " + firstName + "!";
console.log(printHelloName('Chris'));
`);

const printHelloName = firstName => `Hello, ${firstName}!`;
console.log(printHelloName('Chris'));