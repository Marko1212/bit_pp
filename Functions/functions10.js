/*

1.

Write IIFE that replaces the first and the last element of the given array and prints out its elements.
	Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]

    */

(
    function (arr) {

        var inter = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = inter;

        console.log(arr);

    }
)([4, 5, 11, 9]);


function funk(arr) {

    var inter = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = inter;

    console.log(arr);

}

console.log(funk([4, 5, 11, 9]));

/*

Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20

*/

(
    function (a, b) {

        console.log(a * b);

    }
)(4, 5);







