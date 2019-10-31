
"use strict";

/*
1.
Write a function to count vowels in a provided string. 
Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
*/

function countVowels(str) {

    var count = 0;

    for (var i = 0; i < str.length; i++) {

        switch (str[i]) {
            case 'A':
            case 'a':
            case 'E':
            case 'e':
            case 'I':
            case 'i':
            case 'O':
            case 'o':
            case 'U':
            case 'u':
                count++;
        }

    }

    return count;

}

console.log(countVowels("Slobodanka"));

/*
2.

Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

*/

function combineArrays(a, b) {

    var res = [];

    for (var i = 0; i < a.length; i++) {

        res[res.length] = a[i];
        res[res.length] = b[i];
    }
    return res;
}

console.log(combineArrays(["a", "b", "c"], [1, 2, 3]));



/*

3.

Write a function that rotates a list by k elements.

For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]

*/

function rotateList(arr, k) {
    var res = [];

    for (var i = 0; i < arr.length; i++) {
        res[res.length] = arr[(i + k) % arr.length];

    }
    return res;
}

console.log(rotateList([1, 2, 3, 4, 5, 6], 2));

/*

4.
Write a function that takes a number and returns array of its digits.

*/

function returnDigits(num) {

    var str = "";

    var res = [];

    str += num;

    for (var i = 0; i < str.length; i++) {

        res[res.length] = parseInt(str[i]);

    }

    return res;

}


console.log(returnDigits(789654135));

/*5.
Write a program that prints a multiplication table for numbers up to 12.

*/

function multiplicationTable() {

    var str = "";

    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            str += "The product of " + i + " and " + j + " is " + i * j + "." + "\n";
        }
    }

    return str;

}

console.log(multiplicationTable());

/*6.

Write a function to input temperature in Centigrade and convert to Fahrenheit.

*/

function convertCentToFahrenheit(cels) {

    var f = 9 / 5 * cels + 32;
    return f;
}


console.log(convertCentToFahrenheit(20));

/*

7.

Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

*/

function maxElement(arr) {

    var arrNum = [];
    var max;

    /* Filter out non-number elements */

    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
            arrNum[arrNum.length] = arr[i]
        }
    }
    /* Find maximum element */

    max = arrNum[0];


    for (var j = 0; j < arrNum.length; j++) {

        if (max < arrNum[j]) {
            max = arrNum[j];
        }
    }

    return max;

}


console.log(maxElement([1, undefined, "Ivana", 89, 41, -3, 1.256, NaN, Infinity, "", null]));

/*

8.

Write a function to find the maximum and minimum elements. Function returns an array.

*/

function MaxMin(arr) {

    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (max < arr[i]) {

            max = arr[i];

        }

    }

    for (var j = 0; j < arr.length; j++) {

        if (min > arr[j]) {

            min = arr[j];

        }

    }

    return [max, min];

}
console.log(MaxMin([4, 54, 27, -41, -78, 65, -41, 4, 54]));

/*

9.

Write a function to find the median element of array.

Median is the middle value of a set of data. To determine the median value in a sequence of numbers, the numbers must first be arranged in ascending order.

If there is an odd amount of numbers, the median value is the number that is in the middle, with the same amount of numbers below and above.
If there is an even amount of numbers in the list, the median is the average of the two middle values.

*/



