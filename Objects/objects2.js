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

  var res = "";

  for (var i = str.length; i--; i = 0) {
    res += str[i];
  }

  return parseInt(res);
}

console.log(reverseNumber(1234558967));
