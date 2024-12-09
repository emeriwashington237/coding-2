// Discuss the anatomy of a function



// ()= Curly brackets are called parameters.
// This is the designated area for where we
// pass in data into the function definition

// data = data types 

function profileBio(name, income, debt){
    console.log ('username: ' + name);
    console.log ("my income is: " + income);
    let totalValue = income - debt;
    console.log ('my networth is : ' + totalValue);
}
function convertToMinutes(hours) {
    // Multiply the number of hours by 60 to get the minutes
    return hours * 60;
}

// Example usage:
console.log(convertToMinutes(2)); // Outputs: 120
console.log(convertToMinutes(3)); // Outputs: 180
console.log(convertToMinutes(1.5)); // Outputs: 90

profileBio('emeri', 800000, 600)

// Lesson on Conditional Statements
// Conditional statemebts are comprised of the 
// 'IF' and 'ELSE' keywords. They allow us to 
// make decisions in our functions based on the 
// data we recieve.

function checkTVInventory(tvs) {
    if(tvs > 0){
        console.log("TV is in stock!");
    } else {
        console.log("Sorry, out of stock.");
    }
}


checkTVInventory(30)
