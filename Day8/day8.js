//ES-6 Features
// Tasks/Activities:
// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console
const name = "John";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// • Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a multi-line string.
It allows you to span across multiple lines
without needing any special characters.`;
console.log(multiLineString);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
  };
  const { title, author } = book;
  console.log(title, author);
  
// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and
// the new array to the console.
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value o
// Log the result of calling this function with and without the second parameter.
function multiply(a, b = 10) {
    return a * b;
  }
  console.log(multiply(5));     // Output: 50
  console.log(multiply(5, 2));  // Output: 10
  
// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const names = "Alice";
const ages = 30;
const person = {
  names,
  ages,
  greet() {
    console.log(`Hello, my name is ${this.names} and I am ${this.ages} years old.`);
  }
};
console.log(person);
person.greet();

// • Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "dynamicProperty";
const value = "This is a dynamic property value";

const obj = {
  [propName]: value
};
console.log(obj);
