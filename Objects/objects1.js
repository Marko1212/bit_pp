"use strict";

/*



Try to use built-in object methods to solve some of the problems here

1.

Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */


var duplicateArray = function (arr) {

var result = [];

for(var i = 0; i < arr.length; ++i){
  result.push(arr[i]);
  result.push(arr[i]);
}

return result;

}

console.log(duplicateArray([2, 4, 7, 11, -2, 1]));


/* 2.

Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]  */


var removeDuplicates = function(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if (result.indexOf(arr[i]) === -1){
            result.push(arr[i])
        }
    }

/*now sort the array without duplicates in ascending order (numbers) then return the result */
    return result.sort(function(a, b){return a-b});
}

console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

