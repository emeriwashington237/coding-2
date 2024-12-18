// Part 1: Function to reverse a word
function reverseWord(word) {
    return word.split('').reverse().join('');
}

// Part 2: Function to return landmarks based on the state
function stateLandmark(state) {
    // Convert the state to lowercase for case-insensitive comparison
    state = state.toLowerCase();
    
    if (state === "pennsylvania") {
        return "A landmark in Pennsylvania is the Liberty Bell.";
    } else if (state === "new york") {
        return "A landmark in New York is the Statue of Liberty.";
    } else if (state === "california") {
        return "A landmark in California is the Hollywood Walk of Fame.";
    } else if (state === "texas") {
        return "A landmark in Texas is the Alamo.";
    } else {
        return "The state could not be found.";
    }
}

// Testing the functions
console.log(reverseWord("pet"));  // Output: 'tep'
console.log(reverseWord("book")); // Output: 'koob'

console.log(stateLandmark("Pennsylvania"));  // Output: A landmark in Pennsylvania is the Liberty Bell.
console.log(stateLandmark("New York"));     // Output: A landmark in New York is the Statue of Liberty.
console.log(stateLandmark("California"));   // Output: A landmark in California is the Hollywood Walk of Fame.
console.log(stateLandmark("Texas"));        // Output: A landmark in Texas is the Alamo.
console.log(stateLandmark("Florida"));      // Output: The state could not be found.
