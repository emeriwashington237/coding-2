// 1. How do you declare a variable in JavaScript? Please write your answer 
// using JavaScript code. 
let myVariable; // Declares a variable with block scope that can be reassigned

// 2. How would you declare a variable where the data WILL NOT change in JavaScript?
// Please write your answer using JavaScript code. 
const myConstant = "This value is fixed";


// 3. Identify the following JavaScript operators and describe when you would use it?
// Please write your answers using the string data type. 
//  ===
let operator1 = "=== is the strict equality operator. It checks for both value and type equality, meaning '5' === 5 will return false because one is a string and the other is a number.";

let operator2 = "== is the loose equality operator. It checks only for value equality and ignores type, so '5' == 5 will return true.";

let operator3 = "= is the assignment operator. It assigns a value to a variable, as in x = 10.";

//  ==
//  = 

// 4. Describe a scenario where you would use a comparison operator,
// and then provide a code example based on the scenerio you provided. 
let userAge = 20;
if (userAge >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// 5. Describe a scenario where you would use a logical operator,
// and then provide a code example based on the scenerio you provided. 
let isLoggedIn = true;
let hasSubscription = true;

if (isLoggedIn && hasSubscription) {
    console.log("Access to premium content granted.");
} else {
    console.log("Access denied. Please log in or subscribe.");
}

// 6. Create three variables where when combined will result in the value of 36. 
// Please use the console.log () to out put your result. 
let a = 12;
let b = 14;
let c = 10;

console.log(a + b + c); // Output: 36

// 7. Fill in the variable that will output the appropriate result. 
var x = 'Hello';
var y = x * 2;

console.log(y); // Output: NaN
// Your console log should output the value 28.
console.log(y)

// 8. What does it "concatenation" mean? Please write your response as a string
// and also provide a code example of two variables being concatenated and output the result
// using the console.log() function. 

let concatenationDefinition = "Concatenation in JavaScript refers to the process of joining two or more strings together into one string using the '+' operator.";
let firstName = "John";
let lastName = "Doe";

// Concatenating the two strings with a space in between
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: "John Doe"

