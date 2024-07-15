// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 10;
if (num > 0) {
    console.log('positive');

}
else if (num == 0) {
    console.log('Zero');

}
else {
    console.log('negative');

}
// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
if (num >= 18) {
    console.log('You can vote');

}
else {
    console.log('You cannot vote');

}
// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 43;
let num2 = 33;
let num3 = 56;

if (num1 > num2 && num1 > num3) {
    console.log('Greatest Number is 1st Number ', num1);

}
else if (num2 > num3 && num2 > num1) {
    console.log('Greatest Number is 2nd Number ', num2);

}
else {
    console.log('Greatest Number is 3rd Number ', num3);
}

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to
// the console.
let weekday = 2
switch (weekday) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");


}
// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85; // You can change this score to test other cases

let grade;
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log("The grade is " + grade);
        

        
        
        

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);

// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by
// 400) and log the result to the console.
let year = 400;

if((year%4===0 && year%100!==0)||(year%400 === 0)){
    console.log(year,' is a leap year');
    
}
else{
    console.log( year,'is not a leap year');
    
}
// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the
// result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs
// the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.