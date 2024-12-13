// asyncActivityDec13.js

// Task 1: Function to determine if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        return "This is a positive number.";
    } else if (num < 0) {
        return "This is a negative number.";
    } else {
        return "This is zero.";
    }
}

// Task 2: Function to determine movie ticket price based on age
function movieTicketPrice(age) {
    if (age <= 10) {
        return "$5.00";
    } else if (age >= 16 && age < 20) {
        return "$10.00";
    } else if (age >= 20 && age < 65) {
        return "$15.00";
    } else {  // age >= 65
        return "$5.00";
    }
}

// Task 3: Function to calculate the price after applying discount based on membership
function calculateDiscount(membership, itemName, itemPrice) {
    let discount;
    
    if (membership === "superShopper") {
        discount = 0.10; // 10% discount
    } else if (membership === "megaShopper") {
        discount = 0.15; // 15% discount
    } else if (membership === "ultraShopper") {
        discount = 0.20; // 20% discount
    } else {
        return "Invalid membership.";
    }

    const discountAmount = itemPrice * discount; // Calculate the discount amount
    const finalPrice = itemPrice - discountAmount; // Calculate the final price
    return `Congratulations ${membership}, you saved $${discountAmount.toFixed(2)} on this ${itemName}. Your final item price is $${finalPrice.toFixed(2)}.`;
}

// Example usage of the functions:

// Test checkNumber function
console.log(checkNumber(10));  // "This is a positive number."
console.log(checkNumber(-12));  // "This is a negative number."
console.log(checkNumber(0));  // "This is zero."

// Test movieTicketPrice function
console.log(movieTicketPrice(5));   // "$5.00"
console.log(movieTicketPrice(17));  // "$10.00"
console.log(movieTicketPrice(30));  // "$15.00"
console.log(movieTicketPrice(70));  // "$5.00"

// Test calculateDiscount function
console.log(calculateDiscount("superShopper", "TV", 100));  // "Congratulations superShopper, you saved $10.00 on this TV. Your final item price is $90.00."
console.log(calculateDiscount("megaShopper", "Laptop", 200));  // "Congratulations megaShopper, you saved $30.00 on this Laptop. Your final item price is $170.00."
console.log(calculateDiscount("ultraShopper", "Phone", 500));  // "Congratulations ultraShopper, you saved $100.00 on this Phone. Your final item price is $400.00."
