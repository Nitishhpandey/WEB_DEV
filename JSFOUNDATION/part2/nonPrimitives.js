//  objects => non primitives in js



const userName = {
     "first Name" : "nitish",
     isLoggedIn : true,
} // use colon (:) to assign values to the keys in the object

// . dot is the way to access the properties of an object.


 userName.firstName = "kanha"; // updating the value of firstName key in userName object.

console.log(userName.firstName); // nitish
console.log(userName.isLoggedIn); // true

// we can add new properties to the object even after its creation.

userName.lastName = "pandey"; // adding new key value pair to the userName object.
const myFirstame = "nitish";
//  myFirstame = "pandey"; // error because const variables cannot be reassigned.
// another way to access the properties of an object using bracket notation [].
console.log(userName["last Name"]); // nitish

console.log(userName);
console.log(typeof(userName)); // object

let today = new Date(); // Date is a built-in object in JS to work with dates and times.
console.log(today.getDate()); // returns the day of the month
console.log(typeof(today)); // object



// notes:

// use commond + d to select multiple same words at once and edit them together.


// bsically the usernName is an object which contains multiple key value pairs. the main purpose of object is to store multiple values in a single variable. the key is also known as property, and the value can be of any data type including primitives and non-primitives, and the data is mostly in the form of key value pairs and can be muttable.




// Array => is also a built-in object in JS to store multiple values in a single variable but the main difference between array and object is that in array the data is stored in an ordered way using index numbers starting from 0, whereas in object the data is stored in key value pairs where the key is used to access the value.



let heroes = ["superman", "batman", "spiderman"]; // array literal , different kind of values can be stored in an array.

let anotherUser = ["nitish", "kanha", 123, true]; // using Array constructor function to create an array.

console.log(anotherUser[0]);

console.log(1 + "2"); // 12 => string concatenation this happen because of the + operator when one of the operand is string it converts the other operand to string and performs concatenation.

// basic arithmetic operators like - , * , / always convert the string to number if possible and u cannot really on implicit type conversion in js because it can lead to unexpected results.
console.log("11" - 2) // 9 => subtraction operator converts the string to number if possible

let isvalue = true;
console.log(isvalue + 1); // 2 => true is converted to 1 and false is converted to 0 in arithmetic operations.

let value = "2abc";
console.log(value - 1); // NaN => not a number because "2abc" cannot be converted to a number.

console.log(typeof(NaN)); // number => NaN is of type number in js.     

console.log(typeof(undefined)); // undefined
console.log(typeof(null)); // object => this is a bug in js but for backward compatibility it cannot be changed now.

// typescript focus on data types and type safety to avoid such issues.