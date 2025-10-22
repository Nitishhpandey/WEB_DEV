// Numbers => Number in JS is the primitive types for the all numeric values stored in variables.

let balance = 120;
let anotherBalance = new Number (120); // using Number constructor function

// console.log(anotherBalance.valueOf());

// console.log(typeof(balance)); // typeof operator returns the type of the variable or value.

console.log(typeof(anotherBalance)); // object
console.log(balance);

// every single primitives can be converted to object or non-primitives using the constructor function.

// boolean => true or false

let isActive = true;

let isReallyActive = new Boolean(true); //not recommended to use Boolean constructor function


// null and undefined

let fristName;
let lastName1 = undefined; 
console.log(fristName); // undefined means it exits but the definition does not exist.
 
let lastName2 = null; // null means the variable is defined but has no value.


// string => sequence of characters its primitive type in JS.

let mystring = "hello"; // using string literal
let myStringOne = 'hola'; // using single quotes
let userName = 'nitish123';


let oldGreet = mystring + " nitish"
console.log(oldGreet);


let greetMessage = `hello`


let newGreet = `hello ${userName}`; // string interpolation using template literals

let demoOne = `value is ${22 * 2}`
console.log(newGreet);


//  symbol

// the whole purpose of symbol is to create unique identifiers for objects properties.  it guarantees that the identifier is unique, even if two symbols have the same description.

let sm1 = Symbol("nitish") // internally generates a unique identifier and try to avoid name collisions.
let sm2 = Symbol("nitish") // named symbol

console.log(sm1 == sm2); // false because both are unique identifiers. independent of the description.


console.log(sm2);

console.log(sm1);
