//Task 1

// 1. Create a variable called number and assign it any integer.
let number = -5; // You can change this to any integer

// 2. Use an if-else block to print whether the number is positive, negative, or zero.
if (number > 0) {
    console.log("The number is positive."); // Executes if number is greater than zero
} else if (number < 0) {
    console.log("The number is negative."); // Executes if number is less than zero
} else {
    console.log("The number is zero."); // Executes if number is equal to zero
}


//Task 2

// Create a variable called day and assign it the name of any day.
let day = 'Saturday'; // You can change this to any day name

// Use a switch statement to determine if the day is a weekday or weekend.
switch (day) {
    case 'Saturday':
    case 'Sunday':
        console.log(day + " is a weekend."); // Executes for Saturday and Sunday
        break;
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(day + " is a weekday."); // Executes for weekdays
        break;
    default:
        console.log(day + " is not a valid day."); // Executes for invalid day inputs
}


//Task 3

// 1. Write a for loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i); 
    
// Use console.log() to print each number in the loop
}


//Task 4

// 1. Create a variable called count and initialize it to 1.
let count = 1;

// 2. Use a while loop to print the multiplication table of 5 until 5 × 10.
while (count <= 10) {
    console.log(`5 × ${count} = ${5 * count}`); // Display each step
    count++; // Increment the count
}


//Task 5

// 1. Declare and initialize a number with value of 0
let thenumber = 0;

// 2. Write a do-while loop that checks if that number is greater than 10.
do {
    console.log("The number is:", number); // Print the current number
    number++; 

    // 3. Increment the number by 1
} while (number <= 10); // Continue until number is greater than 10


//Task 6

// 1. Write a for loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i); // Print each number

// 2. Use a break statement to exit the loop when the number 5 is reached.
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
}


//Task 7

// 1. Write a for loop that prints only even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
    
// 2. Use a continue statement to skip odd numbers.
    if (i % 2 !== 0) {
        continue; // Skip odd numbers
    }
    console.log(i); 

// 3. Print each even number
}


//Task 8

// 1. Write a function that takes two numbers as parameters and divides the first by the second.
function divideNumbers(num1, num2) {

//2. Use try-catch-finally to handle division by zero
    try {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed."); // Handle division by zero
        }
        const result = num1 / num2; // Perform division
        console.log("Result:", result); // Print the result
    } catch (error) {
        console.log(error.message); 
    
    // 3. Print an error message if an exception occurs
    } finally {
        console.log("Division operation completed."); 
        
    // This will run regardless of success or error
    }
}

// Example call to the function
divideNumbers(10, 0); 


//Task 9

// 1. Write a function called multiply that takes two numbers as parameters and returns their product.
function multiply(num1, num2) {
    return num1 * num2; 
    // Return the product
}

// 2. Call the function with any two numbers and print the result using console.log().
let product = multiply(4, 5); 
// Example call
console.log("Product:", product); 
// Print the result


//Task 10

// 1. Write a program that prints numbers from 1 to 30.
for (let i = 1; i <= 30; i++) {
    
// 2. Print 'Fizz' if the number is divisible by 3.
    
// 3. Print 'Buzz' if the number is divisible by 5.
    
// 4. Print 'FizzBuzz' if the number is divisible by both 3 and 5.

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Divisible by both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz"); // Divisible by 3
    } else if (i % 5 === 0) {
        console.log("Buzz"); // Divisible by 5
    } else {
        console.log(i); // Print the number itself
    }
}


