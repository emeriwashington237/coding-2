// 1. Function that describes what a function is
let answer1 = "A function is a block of reusable code that performs a specific task when called.";
console.log(answer1);

// 2. Function that explains the difference between function parameters and arguments
let answer2 = "A function parameter is a variable in the function definition that accepts input values, while an argument is the actual value passed when calling the function.";
console.log(answer2);

// 3. Function that explains the use of an if/else conditional statement
let answer3 = "An if/else statement allows a program to execute different blocks of code based on whether a condition is true or false.";
console.log(answer3);

// 4. Function that describes the integer data type
let answer4 = "An integer is a whole number that does not contain a fractional part. It can be positive, negative, or zero.";
console.log(answer4);

// 5. Function that describes the boolean data type
let answer5 = "A boolean data type can only have one of two possible values: true or false.";
console.log(answer5);

// 6. Function explaining which operator is best for age verification
let answer6 = "The 'greater-than-or-equal-to' operator (>=) is best for verifying age because it checks if a value meets or exceeds a certain number.";
console.log(answer6);

// 7. Function explaining which operator is best for office security
let answer7 = "The equality operator (==) is best for checking if something matches exactly, such as verifying a passcode.";
console.log(answer7);

// 8. Function to check password length
function checkPasswordLength(password) {
    const length = password.length;

    if (length > 10) {
        return "Your password is too long.";
    } else if (length < 4) {
        return "Your password is too short.";
    } else {
        return "Your password was created successfully.";
    }
}

// Example of using the password length check function
let password = "abc123456789";
let passwordResult = checkPasswordLength(password);
console.log(passwordResult);  // Output: Your password is too long.

// 9. Function to calculate federal income tax based on income
function calculateTax(income) {
    let taxRate;

    if (income >= 0 && income <= 12000) {
        taxRate = 0.10;
    } else if (income >= 12001 && income <= 50000) {
        taxRate = 0.12;
    } else if (income >= 50001 && income <= 103000) {
        taxRate = 0.22;
    } else if (income >= 103001 && income <= 198000) {
        taxRate = 0.23;
    } else {
        return "Income exceeds taxable range.";
    }

    const federalTax = income * taxRate;
    const stateTax = income * 0.03;  // Assuming a flat state tax rate of 3%
    const totalTax = federalTax + stateTax;
    return totalTax;
}

// Example of using the tax calculation function
let income = 45000;
let taxOwed = calculateTax(income);
console.log(taxOwed);  // Output: 6750 (federal + state tax)

// 10. Function to determine college admission based on recommendation letters
function collegeAdmission(school, recLetterCount) {
    if (school === "Temple University" && recLetterCount >= 1) {
        return "Admitted to Temple University.";
    } else if (school === "Penn State" && recLetterCount >= 2) {
        return "Admitted to Penn State.";
    } else if (school === "University of Pennsylvania" && recLetterCount >= 2) {
        return "Admitted to University of Pennsylvania.";
    } else if (school === "Cheyney University" && recLetterCount >= 1) {
        return "Admitted to Cheyney University.";
    } else {
        return `Not admitted to ${school}.`;
    }
}

// Example of using the college admission function
console.log(collegeAdmission("Temple University", 1));  // Output: Admitted to Temple University
console.log(collegeAdmission("Penn State", 1));         // Output: Not admitted to Penn State
console.log(collegeAdmission("University of Pennsylvania", 2));  // Output: Admitted to University of Pennsylvania
console.log(collegeAdmission("Cheyney University", 2));  // Output: Not admitted to Cheyney University
