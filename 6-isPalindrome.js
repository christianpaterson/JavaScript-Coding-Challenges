/* Problem 6 */
/* Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)
Ex: isPalindrome("racecar") returns true
Ex: isPalindrome("abcd") returns false */

console.log(`
/* Problem 6 */
/* Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)
Ex: isPalindrome("racecar") returns true
Ex: isPalindrome("abcd") returns false */

const isPalindrome = str => str.split("").reverse().toString().replace(/,/g, "") === str;
const isPalindromeShorter = str => str.split("").reverse().join('') === str;

console.log(isPalindrome("racecar"));
console.log(isPalindrome("abcd"));
console.log(isPalindrome("Abcba"));
console.log(isPalindrome("bor ro w or rob"));
console.log(isPalindrome("tacocat"));

console.log(isPalindromeShorter("racecar"));
console.log(isPalindromeShorter("abcd"));
console.log(isPalindromeShorter("Abcba"));
console.log(isPalindromeShorter("bor ro w or rob"));
console.log(isPalindromeShorter("tacocat"));
`)

const isPalindrome = str => str.split("").reverse().toString().replace(/,/g, "") === str;
const isPalindromeShorter = str => str.split("").reverse().join('') === str;

console.log(isPalindrome("racecar"));
console.log(isPalindrome("abcd"));
console.log(isPalindrome("Abcba"));
console.log(isPalindrome("bor ro w or rob"));
console.log(isPalindrome("tacocat"));

console.log(isPalindromeShorter("racecar"));
console.log(isPalindromeShorter("abcd"));
console.log(isPalindromeShorter("Abcba"));
console.log(isPalindromeShorter("bor ro w or rob"));
console.log(isPalindromeShorter("tacocat"));