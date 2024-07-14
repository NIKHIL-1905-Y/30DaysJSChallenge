// Day 2. operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations
// • Task 1: Write a program to add two numbers and log the result to the console.
let a = 10;
let b = 20;
console.log(a+b);

// • Task 2: Write a program to subtract two numbers and log the result to the console.
console.log(a-b);

// • Task 3: Write a program to multiply two numbers and log the result to the console.
console.log(a*b);

// • Task 4: Write a program to divide two numbers and log the result to the console.
console.log(a/b);

// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log(a%b);

// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
let c = 30;
   c+=34;
   console.log(c);
   

// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let d = 40;
   d -= 4;
   console.log(d);
   
// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.
     let num1 = 20;
     let num2 = 30;
     console.log(num1>num2);
     console.log(num1<num2);
     

     
// • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let num12 = 30;
let num21 = 30;
console.log(num12>=num21);
console.log(num12<=num21);

// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let number = 4;
let string = "4";
console.log(number==string); // true because value is same
console.log(number===string);// false because data type is not same


// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let cond1 = true;
let cond2 = false;

console.log(cond1&&cond2);

// • Task 12: Write a program that uses the ll operator to combine two conditions and log the result to the console.

console.log(cond1||cond2);

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(!cond2);

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the
// console.

let numbe = 20;
let result = numbe>=0 ? 'Positive':'Negative';
console.log(result);

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication,
// division, remainder) on two numbers and logs the results.
let num11 = 5;
let num22 = 3;
console.log('Sum:', num11 + num22);
console.log('Difference:', num11 - num22);
console.log('Product:', num11 * num22);
console.log('Quotient:', num11 / num22);
console.log('Remainder:', num11 % num22);

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and
// combines conditions using logical operators, logging the results.

console.log('Is num1 > num2?', num1 > num2);
console.log('Is num1 < num2?', num1 < num2);
console.log('Is num1 >= num2?', num1 >= num2);
console.log('Is num1 <= num2?', num1 <= num2);
console.log('Is num1 == num2?', num1 == num2);
console.log('Is num1 === num2?', num1 === num2);

let condition1 = true;
let condition2 = false;
console.log('Condition1 && Condition2:', condition1 && condition2);
console.log('Condition1 || Condition2:', condition1 || condition2);
console.log('!Condition1:', !condition1);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the
// result.
let result2 = numbe>=0 ? 'Positive':'Negative';
console.log(result);