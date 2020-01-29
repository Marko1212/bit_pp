/* 1.Write a function that capitalizes the first letter of each string argument it receives.
	Function arguments: 'hello', 'there', 'ES', 6
	Output: 'Hello', 'There', 'ES'
 */

const arr = ['hello', 'there', 'ES', 6]

const result = arr.filter(element => typeof (element) === "string")
console.log(result);

const arr2 = result.map(element =>

    element.charAt(0).toUpperCase() + element.slice(1)


);


console.log(arr2)
/*
2.Write a function that calculates sale tax that should be paid for the product of the
 given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
	Input: 120
    Output: 24
    Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only

 */

const array1 = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
const array2 = array1.map(element => {
    var res = {};
    res.name = element.name;
    res.price = element.price * 1.2;
    return res;
})
console.log(array2);
const array3 = array1.map(element =>
    element.price * 0.2
)
console.log(array3);

/* 3. Write a function that increases each element of the given array by the given value. 
If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1] */

const inputArray = [4, 6, 11, -9, 2.1];
const add = (arr, param) => {
    if (param === undefined) {
        param = 1
    }
    const newArray = arr.map(element => element + param)
    return newArray;
}
console.log(add(inputArray, 3));

/*4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
 */
const input = [6, 11, 9, 0, 3];
const res = input.filter(element => element % 2 === 0)
console.log(res);


/* 5. Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard'] */


const inputArray1 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

const result5 = inputArray1.filter(element => element.includes('JS') || element.includes('js'));
console.log(result5);


/*6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
    Output: [7, 8] */
const arr = [1.6, 11.34, 9.23, 7, 3.11, 8]
const res6 = arr.filter(element => parseInt(element) === element)
console.log(res6);


/* 7. Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
    Output: [45, 553] */

const args = [23, 11.5, 9, "abc", 45, 28, 553];

const filterItems = (digit) => {
    return args.filter(arg => parseInt(arg) === arg && arg.toString().indexOf(digit.toString()) > -1);
}

console.log(filterItems(5));


/* 8. Write a function that returns indexes of the elements greater than 10.
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
    Output: 1, 2, 5 */

// indication : https://stackoverflow.com/questions/26468557/return-index-value-from-filter-method-javascript
// FILTER (is simply just REMOVING the UNDEFINED elements (which are FALSY and considered the same as FALSE)
const array = [1.6, 11.34, 29.23, 7, 3.11, 18];

const indexElement = (arr, number) => arr.map((element, index) => element > number ? index : undefined).filter(x => x);

console.log(indexElement(array, 10));

/* 9.
Create an array of persons. A person should be an object with name and age properties.
a. Experiment with enhanced object literals (ES6).
b. Write a function that prints out the names of persons older than 25.
c. Write a function that checks if there is a person older than 40.
d. Write a function that checks if all persons are older than 20.
  */

const arrayPersons = [{ name: "John", age: 18 }, { name: "Maria", age: 33 }, { name: "Andjelija", age: 75 }, { name: "Marko", age: 46 }]

// a. Experiment with enhanced object literals (ES6).
let name = "name";
let age = "age";

const John = {
    [name]: "John", [age]: 25
}

console.log(John);
console.log(John.name);
console.log(John.age);

const nameMaria = { [name]: "Maria" };
const ageMaria = { [age]: 33 };
const Maria = { ...nameMaria, ...ageMaria };
console.log(Maria);

// b. Write a function that prints out the names of persons older than 25.

const olderThanThreshold = (threshold, arr) => arr.map(element => element.age > 25 ? element.name : undefined).filter(x => x);

console.log(olderThanThreshold(25, arrayPersons))

// c. Write a function that checks if there is a person older than 40.

const olderThanForty = arrayPersons.some(item => item.age > 40);

console.log(olderThanForty);

// d. Write a function that checks if all persons are older than 20.

const allOlderThanForty = arrayPersons.every(item => item.age > 40);

console.log(allOlderThanForty);


/* 10. Write a function that checks if the given array is an array of positive integer values.
	Input: [3, 11, 9, 5, 6]
    Output: yes

	Input: [3, -12, 4, 11]
    Output: no */


const input1 = [3, 11, 9, 5, 6];
const input2 = [3, -12, 4, 11];

const positive1 = input1.every(element => element > 0);
console.log(positive1);

const positive2 = input2.every(element => element > 0);
console.log(positive2);

/* 11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output:  48 */

const array4 = [2, 8, 3];

const reducer = (accumulator, currentValue) => accumulator * currentValue;

console.log(array4.reduce(reducer, 1));


/* 12. Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
    Output: 8 */

const array5 = [2, 7, 3, 8, 5.4];

const reducer1 = (accumulator, currentValue) => Math.max(accumulator, currentValue);

console.log(array5.reduce(reducer1, -Infinity));