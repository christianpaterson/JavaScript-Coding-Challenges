/* Problem 2 */
/* Create a string to get initials from a first and last name.
Must be uppercase and separated with a period (".")
Ex. getInitials("Aaron Jack"), returns "A.J" */

console.log(`
/* Problem 2 */
/* Create a string to get initials from a first and last name.
Must be uppercase and separated with a period (".")
Ex. getInitials("Aaron Jack"), returns "A.J" */

const getInitials = name => name.toUpperCase().split(" ")[0][0] + "." + name.toUpperCase().split(" ")[1][0];
const getInitialsAgain = name => name.toUpperCase().split(" ").map(element => element[0]).join(".");

console.log(getInitials('chris paterson'));
console.log(getInitials('Aaron Jack'));

console.log(getInitialsAgain('chris paterson'));
console.log(getInitialsAgain('Aaron Jack'));
`)

const getInitials = name => name.toUpperCase().split(" ")[0][0] + "." + name.toUpperCase().split(" ")[1][0];
const getInitialsAgain = name => name.toUpperCase().split(" ").map(element => element[0]).join(".");

console.log(getInitials('chris paterson'));
console.log(getInitials('Aaron Jack'));

console.log(getInitialsAgain('chris paterson'));
console.log(getInitialsAgain('Aaron Jack'));