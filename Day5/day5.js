// Tasks/Activities:
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkOddEven(num){
    if(num%2==0)
    {
        console.log('The number is Even');
        
    }
    else{
        console.log('The number is Odd');
        
    }
}
checkOddEven(23)
// • Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(num){
    console.log('The Square of Number is ',num*num);
    
}
calculateSquare(12)
// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function maximumOfTwo(num1,num2){
    if(num1>num2){
        console.log(`The maximum of two numbers is ${num1}`);
        
    }
    else{
        console.log(`The maximum of two Numbers is ${num2}`);
        
    }
}
maximumOfTwo(34,56)
// • Task 4: Write a function expression to concatenate two strings and return the result.
function concatenateStr(s1,s2)
{
    console.log(s1 + s2);
    
}
concatenateStr("Ram","Pal")
// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a,b)=>{
    console.log("The sum of two NUmbers is :",a+b);
    
}
sum(10,34)
// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkChar = (char,str)=>{
    console.log(str.includes(char));
    

}
checkChar('s',"skinny")
// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function Product(a,b=1){
    return a*b;
}

console.log('The product of two numbers is : ',Product(3,4));


// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function GreetingMeesage(name,age=1){

    console.log(`Hello, ${name}, your age is ${age}`);
    
}
GreetingMeesage("Nikhil",23)
// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

// Example usage
repeatFunction(() => console.log('Hello'), 3);


// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies
// the second function to the result.

function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

// Example usage
const double = x => x * 2;
const addTen = x => x + 10;

console.log(applyFunctions(double, addTen, 5)); // Output: 20 (double(5) = 10, addTen(10) = 20)
