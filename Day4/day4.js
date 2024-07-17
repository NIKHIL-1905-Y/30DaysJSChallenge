// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for(let i = 1;i<=10;i++){
    console.log(i);
    
}
// • Task 2: Write a program to print the multiplication table of 5 using a for loop
let k = 1;
console.log('Multiplication table of Five');

while(k<=10){
    console.log(5*k);
    k++;
    
}
// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
k = 1;
console.log('Sum of numbers upto 10');

let sum = 0;
while(k<=10){
     sum = sum + k;
     k++;
    
}
console.log(sum);


// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log('Reverse numbers using while loops');

k = 10;
while(k>=1){
    
    console.log(k);
    k--;
    
}
// Activity 3: Do ...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log('Do while loop print Numbers');

let num = 1;
do{
    console.log(num);
    num++;
    
}
while(num<=5);

// • Task 6: Write a program to calculate the factorial of a number using a do..while loop
console.log('Factorial of a number ');
num = 8;

let fact  = 1;
let j = 1;

do{
    fact = j*fact;
    j++;
    
}
while(j<=num)
    console.log(fact);
    

// • Task 7: Write a program to print a pattem using nested for loops:
// (ignore color)
// *
// **
// ***
// ****
// *****

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
// Activity 5: Loop Control Statements
console.log('Loop Control');

// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log(' continue statement');

for(let i = 1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
    
}
// • Task 8: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log('Break Statement');

for(let i = 1;i<=10;i++){
    if(i==7) break;
    console.log(i);
    
}