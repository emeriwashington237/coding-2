/**
 * Reverses the given word and returns it.
 *
 * @param {string} word - The word to be reversed.
 * @return {string} - The reversed word.
 */
function reverseWord(word) {
    return word.split("").reverse().join(""); // Split into array, reverse, and join back
}

/**
 * Returns a landmark message based on the state provided.
 *
 * @param {string} state - The name of the state.
 * @return {string} - A message about the state's landmark, or a not found message.
 */
function getStateLandmark(state) {
    // Object containing states and their landmarks
    const landmarks = {
        pennsylvania: "Liberty Bell",
        "new york": "Statue of Liberty",
        california: "Hollywood Walk of Fame",
        texas: "The Alamo" // Replace or expand with another state and landmark
    };

    // Normalize state input for case insensitivity
    state = state.toLowerCase();

    // Check if the state exists in the object
    if (landmarks[state]) {
        // Capitalize the first letter of the state name for output
        const formattedState = state.charAt(0).toUpperCase() + state.slice(1);
        return `A landmark in ${formattedState} is ${landmarks[state]}.`;
    } else {
        return "The state could not be found.";
    }
}

// Example usage of the functions
console.log(reverseWord("pet")); // Output: tep
console.log(reverseWord("book")); // Output: koob

console.log(getStateLandmark("New York")); // Output: A landmark in New York is Statue of Liberty.
console.log(getStateLandmark("Alaska")); // Output: The state could not be found.
