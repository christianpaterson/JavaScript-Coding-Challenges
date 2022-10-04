/* Problem 5 */
/* Given a string, duplicate in n times and return a single string
Ex: repeatString("B", 5) returns "BBBBB"
Ex: repeatString("Abc", 3) returns "AbcAbcAbc" */

console.log(`
/* Problem 5 */
/* Given a string, duplicate in n times and return a single string
Ex: repeatString("B", 5) returns "BBBBB"
Ex: repeatString("Abc", 3) returns "AbcAbcAbc" */

const repeatString = (s, n) => {
    let finalString = "";
    while(n--) {
        finalString += s;
    }
    return finalString;
}

const repeatEasy = (s, n) => s.repeat(n);

console.log(repeatString("Abc", 3));
console.log(repeatEasy("Abc", 3));
`)

const repeatString = (s, n) => {
    let finalString = "";
    while(n--) {
        finalString += s;
    }
    return finalString;
}

const repeatEasy = (s, n) => s.repeat(n);

console.log(repeatString("Abc", 3));
console.log(repeatEasy("Abc", 3));