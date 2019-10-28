
"use strict";

/*
1. Find the min and max element in the following array and switch their places.
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/




function switchMinAndMax(arr) {

    var len = arr.length, min = Infinity, max = -Infinity;
    var minIndex = 0, maxIndex = 0;

    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
            minIndex = len;
        }
    }

    len = arr.length;

    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
            maxIndex = len;
        }
    }

    arr[minIndex] = max;
    arr[maxIndex] = min;

    return arr;
}

console.log(switchMinAndMax([3, 500, 12, 149, 53, 414, 1, 19]));


/* 2.

Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

*/

function calculateArray(arr) {

    var result = [];

    for (var i = 0; i < arr.length; i++) {

        result[i] = arr[i] / 2 + 5;

        if (result[i] === 0) {
            result[i] = 20
        }
    }

    return result;
}

console.log(calculateArray([3, 500, -10, 149, 53, 414, 1, 19]));

/*
3.

Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Michael acquired 50 points and failed to complete the exam.
*/


function resultsOfStudents(namesOfStudents, pointsOfStudents) {

    var result = "";

    for (var i = 0; i < namesOfStudents.length; i++) {

        if (pointsOfStudents[i] <= 50) {
            result += namesOfStudents[i] + " acquired " + pointsOfStudents[i] + " and failed to complete the exam. ";
        } else if (pointsOfStudents[i] <= 60) {
            result += namesOfStudents[i] + " acquired " + pointsOfStudents[i] + " and earned 6. ";
        }
        else if (pointsOfStudents[i] <= 70) {
            result += namesOfStudents[i] + " acquired " + pointsOfStudents[i] + " and earned 7. ";
        } else if (pointsOfStudents[i] <= 80) {
            result += namesOfStudents[i] + " acquired " + pointsOfStudents[i] + " and earned 8. ";
        } else if (pointsOfStudents[i] <= 90) {
            result += namesOfStudents[i] + " acquired " + pointsOfStudents[i] + " and earned 9. ";
        } else if (pointsOfStudents[i] <= 100) {
            result += namesOfStudents[i] + " acquired " + pointsOfStudents[i] + " and earned 10. ";

        }
    }

    return result

}


console.log(resultsOfStudents(["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/*
6.

Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000

*/

function interestingCalculation() {

    var sum = 0;
    var substr = 0;

    for (var i = 0; i <= 500; i++) {

        sum += 2 * i;

    }

    for (var j = 0; j <= 249; j++) {

        substr += 2 * j + 1;

    }

    return 12.5 * (sum - substr);
}

console.log(interestingCalculation());


/*

7.

Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them.
Print it out in the console.

Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa

*/


function createNewString(arr) {


    var res = "";

    for (var i = 0; i <= arr.length; i++) {

        if ((typeof arr[i] === "string") && (arr[i].length >= 2)) {

            res += arr[i][0];
            res += arr[i][1];
        }
    }

    return res;

}

console.log(createNewString(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));









