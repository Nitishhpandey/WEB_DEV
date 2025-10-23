//  checking if a number is greater than another number

let num1 = 10;
let num2 = 20;

console.log("i am regular bottom code");
 
if (num1 > num2) 
{
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}

console.log("i am regular bottom code");

// checking if a string is equal to another string

let username ="nitish";
let anotherusername = "nitish";

if (username != anotherusername)
{
    console.log(`${username} is the same to the username ${anotherusername}`);
    
}else
{
    console.log("it is not");
    
}

// checking variable is number or not

let score = 44;
if (typeof score === "number")
{
    console.log(`${score} is a number`);
    
}else{
    console.log(`${score} is not number`);
    
}

// checking boolean value is true or false

let isLoggedIn = false;

if(isLoggedIn)
{
    console.log("loged in ");
    
}else {
    console.log("not loged in");        
}

// chceckig array is empty or not


let items = ["item1"];
if (items.length ===0)
{
    console.log("empty");
    
}