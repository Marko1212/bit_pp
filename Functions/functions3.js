/* 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string). */


function insertString(p, str, iniStr) {
    var res = "";

    for (var i = 0; i < p; i++) {
        res += iniStr[i];
    }
    for (var j = 0; j < str.length; j++) {
        res += str[j];
    }
    for (var k = p; k < iniStr.length; k++) {
        res += iniStr[k];
    }
    return res;
}
console.log(insertString(2, "abc", "petak"));

/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity. */


function joinElements(a) {
    var res = "";

    for (var i = 0; i < a.length; i++) {
        if (isNaN(a[i]) === true || a[i] === undefined || a[i] === null || a[i] === Infinity) {
            continue;
        }

        res += a[i];
    }
    return res;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* if (isNaN(a[i]) === false && a[i] !== null) */


/* 3.Write a program to filter out falsy values from the array.*/


function filterFalsy(a) {
    var res = [];

    for (var i = 0; i < a.length; i++) {
        if (!!a[i]) {
            res[res.length] = a[i];
        }
    }
    return res;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 4.Write a function that reverses a number. The result must be a number. */


function reverseNum(num) {

    var res = '' + num;

    var output = '';

    var outputNum;

    for (var i = res.length - 1; i >= 0; i--) {
        output += res[i]
    }

    outputNum = parseInt(output);

    return outputNum;


}

console.log(reverseNum(4567231));

/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */

