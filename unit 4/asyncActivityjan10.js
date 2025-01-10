// Task 1: Create three different lists of grocery items

// List of items in the frozen food aisle
const frozenFood = ["Frozen Pizza", "Ice Cream", "Frozen Vegetables", "Chicken Nuggets", "Frozen Fries"];

// List of items in the international food aisle
const internationalFood = ["Soy Sauce", "Rice Noodles", "Curry Paste", "Sushi Kit", "Taco Shells"];

// List of items in the produce aisle
const produceAisle = ["Apples", "Bananas", "Spinach", "Tomatoes", "Carrots"];

// Task 2: Accessing elements at specific indices
const numbers = [1, 30, 39, 50, 293, 100];

console.log("Item at index 0 of the numbers list:", numbers[0]); // Output: 1
console.log("Item at index 3 of the numbers list:", numbers[3]); // Output: 50
console.log("Item at index 4 of the numbers list:", numbers[4]); // Output: 293

// Task 3: Create a function that multiplies the number at index 4 of the list
// Function to multiply the value at index 4 by a given factor
function multiplyAtIndex4(list, factor) {
    return list[4] * factor;
}

// Example usage of the function:
const result = multiplyAtIndex4(numbers, 2); // Multiplies the value at index 4 (293) by 2
console.log("Multiplying value at index 4 by 2:", result); // Output: 586
