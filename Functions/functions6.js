
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



Write a function to find the maximum and minimum elements. Function returns an array.

 

Write a function to find the median element of array.

 

Write a function to find the element that occurs most frequently.

 

Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

 

Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

 

Write a function to find all the numbers greater than the average.

 

The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40

 


Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

 

