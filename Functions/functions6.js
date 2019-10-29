
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

