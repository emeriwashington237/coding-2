// Education Rank Function
function educationRank(gradeLevel) {
    if (gradeLevel === 1) {
        console.log("You are a freshman in undergrad.");
    } else if (gradeLevel === 2) {
        console.log("You are a sophomore in undergrad.");
    } else if (gradeLevel === 3) {
        console.log("You are a junior in undergrad.");
    } else if (gradeLevel === 4) {
        console.log("You are a senior in undergrad.");
    } else if (gradeLevel === 5 || gradeLevel === 6) {
        console.log("You are in a master's program in graduate school.");
    } else {
        console.log("Error: data not accepted.");
    }
}

// College Title By Year Function
function collegeTitleByYear(year) {
    if (year === 4) {
        console.log("You are a senior.");
    } else if (year === 5 || year === 6) {
        console.log("You are in a master's program.");
    } else {
        console.log("Error: data not accepted.");
    }
}

// Grocery List Example
var GroceryList = ["Milk", "Eggs", "Bread", "Butter"]; // Array of grocery items

// Coding Class Period Example
var codingClassPeriod = ["Will", "Jaydin", "Haleem", "John"]; // Array of names

// Call Functions to Test Them
educationRank(3); // Output: You are a junior in undergrad.
collegeTitleByYear(5); // Output: You are in a master's program.

// Output the Grocery List and Coding Class Period
console.log("Grocery List:", GroceryList); // Output: Grocery List: [ 'Milk', 'Eggs', 'Bread', 'Butter' ]
console.log("Coding Class Period:", codingClassPeriod); // Output: Coding Class Period: [ 'Will', 'Jaydin', 'Haleem', 'John' ]


var groceryList = ['apple', 'water', 'milk', 'paper towels', 'dish soap'];

var itemAtIndex3 = groceryList[3]; // This will give 'paper towels'
var itemAtIndex1 = groceryList[1]; // This will give 'water'

console.log("Item at index 3:", itemAtIndex3); // Output: 'paper towels'
console.log("Item at index 1:", itemAtIndex1); // Output: 'water'

