"use strict";

/*



Try to use built-in object methods to solve some of the problems here

1.

Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */


var duplicateArray = function (arr) {

    var result = [];

    for (var i = 0; i < arr.length; ++i) {
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


var removeDuplicates = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }

    /*now sort the array without duplicates in ascending order (numbers) then return the result */
    return result.sort(function (a, b) { return a - b });
}

console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));



/*

3.a.

Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true


 */

function isOddLength(arr) {
    return arr.length % 2 === 1;
}
/* 
console.log(isOddLength([1, 2, 9, 2, 1, 7])); */


/*

3.b.

Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4

*/

function countNumbersLessThanCentral(arr) {

    var centralIndex;
    var counter = 0;

    if (isOddLength(arr) === false) {
        return "Error!!!";
    }

    else {

        centralIndex = Math.floor(arr.length / 2);

        for (var i = 0; i < arr.length; i++) {

            if (arr[i] < arr[centralIndex]) {
                counter++;
            }

        }

    }

    return counter;
}


console.log(countNumbersLessThanCentral([-1, 8.1, 3, 6, 2.3, 44, 2.11, 3, 1]));

/*

4.

Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }

*/

function smallestElement(arr) {



}