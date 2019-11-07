"use strict";

/* 1.

Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

'ff', 16, 8 -> 377

 */

function convertNumber(num, currentBase, newBase) {
  var res = parseInt(num, currentBase);

  var finalString = res.toString(newBase);

  return parseInt(finalString);
}

var result = convertNumber("ff", 16, 8);

console.log(result);

/* 
2.

Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

	12345 -> 54321
 */

function reverseNumber(num) {
  var str = new String(num);

  var x = str
    .split("")
    .reverse()
    .join("");
  /* console.log(typeof x); : string*/

  var y = parseInt(x);
  /* console.log(typeof y); : number */

  return y;
}

console.log(reverseNumber(123412438));

/*
3.

Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”

*/

function alphabeticalOrder(str) {
  return str
    .split("")
    .sort()
    .join("");
}
console.log(alphabeticalOrder("webmaster"));

/* 
4.

Write a function to alphabetize words of a given string. 
Alphabetizing a string means rearranging the letters so they 
are sorted from A to Z. 
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/

function alphabeticalOrderWords(str) {
  var arrOfStrings = str.split(" ");

  console.log(arrOfStrings);

  for (var i = 0; i < arrOfStrings.length; i++) {
    arrOfStrings[i] = alphabeticalOrder(arrOfStrings[i]);
  }
  console.log(arrOfStrings);

  return arrOfStrings.join(" ");
}

console.log(alphabeticalOrderWords("Republic Of Serbia"));

/*   

5.

Write a function to split a string and convert it into an array of words.

  "John Snow" -> [ 'John', 'Snow' ]
  
 */

function convertStrToArrOfWords(str) {
  return str.split(" ");
}

console.log(convertStrToArrOfWords("John Snow"));

/* 

6. Write a function to convert a string to its abbreviated form. 

  "John Snow" -> 	"John S." */

function abbrevStr(str) {
  var splitted = str.split(" ");
  if (splitted.length > 1) {
    return splitted[0] + " " + splitted[1].charAt(0) + ".";
  }
  return splitted[0];
}

console.log(abbrevStr("John Snow"));

/* 

7.

Write a function that can pad (left, right) a string to get to a determined length. P.S. The output is a string.

	'0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000
 
*/

function padString(str, num, direction) {
  if (direction === "l") {
    return (str + num).slice(-str.length);
  }
  if (direction === "d") {
    return (num + str).slice(0, str.length);
  }
}

console.log(padString("0000", 123, "l"));
console.log(padString("00000000", 123, "d"));

/* 

8.

Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises" 

*/
