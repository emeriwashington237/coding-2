// Async Activity January 10, 2025

// 1. Create 3 different lists with grocery store items.

// List for frozen food aisle
let frozenFoods = ["Frozen Pizza", "Ice Cream", "Frozen Vegetables", "Frozen Fish", "Frozen Chicken"];

// List for international food aisle
let internationalFoods = ["Sushi Rolls", "Tacos", "Curry Paste", "Sriracha", "Pasta"];

// List for produce aisle
let produce = ["Apples", "Bananas", "Carrots", "Lettuce", "Tomatoes"];

// Print the lists
console.log("Frozen Foods:", frozenFoods);
console.log("International Foods:", internationalFoods);
console.log("Produce Items:", produce);

// 2. Use console.log to return the correct values from the 'numbers' array.

let numbers = [1, 30, 39, 50, 293, 100];

// Print the number at index 0
console.log("Number at index 0:", numbers[0]);

// Print the number at index 3
console.log("Number at index 3:", numbers[3]);

// Print the number at index 4
console.log("Number at index 4:", numbers[4]);

// 3. Create a function to multiply the number at index 4 in the array

function multiplyIndex4() {
    let numberAtIndex4 = numbers[4];
    let result = numberAtIndex4 * 2; // Multiplying by 2 (you can adjust this as needed)
    return result;
}

// Print the result of multiplying the number at index 4 by 2
console.log("Number at index 4 multiplied by 2:", multiplyIndex4());
