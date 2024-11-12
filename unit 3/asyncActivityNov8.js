// 1. What does "string concatenation" mean?
// String concatenation is the process of joining two or more strings together to form a single string.
let greeting = "Hello, ";
let name = "World!";
console.log(greeting + name); // Output: Hello, World!

// 2. Three rules for creating variable names:
// - Variable names must begin with a letter, underscore (_), or dollar sign ($), and cannot start with a number.
// - They are case-sensitive, meaning `name` and `Name` would be considered different variables.
// - Reserved words, like `let` or `console`, cannot be used as variable names.

let rulesForVariableNames = "1. Must start with a letter, _, or $. 2. Case-sensitive. 3. Cannot use reserved words.";
console.log(rulesForVariableNames);

// 3. Define and give examples of Camel Case, Snake Case, and Pascal Case:
// Camel Case
let camelCaseExample = "camelCaseExample";
// Snake Case
let snake_case_example = "snake_case_example";
// Pascal Case
let PascalCaseExample = "PascalCaseExample";

console.log("Camel Case:", camelCaseExample);
console.log("Snake Case:", snake_case_example);
console.log("Pascal Case:", PascalCaseExample);

// 4. Find the missing variable for assignment operation:
let a = 7; // Assigning 7 to 'a' to produce the correct result for b
let b = a * 100;
console.log(b); // Output: 700

// 5. Using logical operators to evaluate the following variables:
var x = 12;
var y = 2;
var z = 12 / 4;
console.log(x <= 12 && z < 10); // Output: false
// Explanation: The '&&' (AND) operator is used because both conditions must be true for the overall expression to be true. Since 'z < 10' is false, the result is false.
-