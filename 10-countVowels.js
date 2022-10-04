/* Problem 10 */
/* Given a string, count the vowels and return that count
Ex: countVowels("adsbecdei") -> a, e, e, i -> 4
Ex: countVowels("ffjnkjnj") -> no vowels -> 0 */

console.log(`
/* Problem 10 */
/* Given a string, count the vowels and return that count
Ex: countVowels("adsbecdei") -> a, e, e, i -> 4
Ex: countVowels("ffjnkjnj") -> no vowels -> 0 */

const vowels = ["a", "e", "i", "o", "u"];

const countVowels = str => str.split("").filter(char => char === "a" || char === "e" || char === "i" || char === "o" || char === "u").length;
const countVowelsClever = str => str.length - str.replace(/[aeiou]/g, "").length;


console.log(countVowels("adsbecddfaknnvasdofjoasdnfoansooinadfnoei"));
console.log(countVowels("adsdfafjndfaiouzosbecdei"));
console.log(countVowels("adsbecfhiaisddei"));
console.log(countVowels("adsbecdei"));
console.log(countVowels("ffjnkjnj"));
 
console.log(countVowelsClever("adsbecddfaknnvasdofjoasdnfoansooinadfnoei"));
console.log(countVowelsClever("adsdfafjndfaiouzosbecdei"));
console.log(countVowelsClever("adsbecfhiaisddei"));
console.log(countVowelsClever("adsbecdei"));
console.log(countVowelsClever("ffjnkjnj"));
`)

const vowels = ["a", "e", "i", "o", "u"];

const countVowels = str => str.split("").filter(char => char === "a" || char === "e" || char === "i" || char === "o" || char === "u").length;
const countVowelsClever = str => str.length - str.replace(/[aeiou]/g, "").length;


console.log(countVowels("adsbecddfaknnvasdofjoasdnfoansooinadfnoei"));
console.log(countVowels("adsdfafjndfaiouzosbecdei"));
console.log(countVowels("adsbecfhiaisddei"));
console.log(countVowels("adsbecdei"));
console.log(countVowels("ffjnkjnj"));
 
console.log(countVowelsClever("adsbecddfaknnvasdofjoasdnfoansooinadfnoei"));
console.log(countVowelsClever("adsdfafjndfaiouzosbecdei"));
console.log(countVowelsClever("adsbecfhiaisddei"));
console.log(countVowelsClever("adsbecdei"));
console.log(countVowelsClever("ffjnkjnj"));