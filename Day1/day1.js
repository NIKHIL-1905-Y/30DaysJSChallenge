// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var a = 30;
console.log(30);
// • Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let str = "Yadavji";
console.log(str);

// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const bool = true;
console.log(bool);

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof
// operator.
console.log('Data Types');

let num  =9;
let strs = "String";
let istrue = true;
let obj = {
    name:"Nikhil",
    age:23
}
let arr = [1,3,4,5]
console.log(typeof(num));
console.log(typeof(strs));
console.log(typeof(istrue));
console.log(typeof(obj));
console.log(typeof(arr));

// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
let value = 20;
console.log(value);

value = 30;
console.log(value);

// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.
const val = 30;
val =40;
console.log(val);   // Assignment to constant variable.

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each
// variable to the console.
// Feature 1
let nums = 25;
let stri = "OpenAI";
let bools = true;
let objs = { language: "JavaScript" };
let arrs = [10, 20, 30];

console.log(`Value: ${num}, Type: ${typeof nums}`);    // Logs: Value: 25, Type: number
console.log(`Value: ${str}, Type: ${typeof stri}`);    // Logs: Value: OpenAI, Type: string
console.log(`Value: ${bool}, Type: ${typeof bools}`);  // Logs: Value: true, Type: boolean
console.log(`Value: ${obj}, Type: ${typeof objs}`);    // Logs: Value: [object Object], Type: object
console.log(`Value: ${arr}, Type: ${typeof arrs}`);    // Logs: Value: 10,20,30, Type: object

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to
// reassignment.
// Feature 2

// Using let
let letVar = "initial let value";
console.log(letVar); // Logs: initial let value
letVar = "new let value";
console.log(letVar); // Logs: new let value

// Using const
const constVar = "initial const value";
console.log(constVar); // Logs: initial const value
// Uncomment the next line to see the error
constVar = "new const value"; // TypeError: Assignment to constant variable.
