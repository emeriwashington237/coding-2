// Function to reverse a word
function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  // Function to display a landmark based on the state
  function stateLandmark(state) {
    switch(state.toLowerCase()) {
      case 'pennsylvania':
        return 'A landmark in Pennsylvania is the Liberty Bell.';
      case 'new york':
        return 'A landmark in New York is the Statue of Liberty.';
      case 'california':
        return 'A landmark in California is the Hollywood Walk of Fame.';
      case 'texas':
        return 'A landmark in Texas is the Alamo.';
      default:
        return 'State could not be found.';
    }
  }
  
  // Test the reverseWord function
  console.log(reverseWord('pet'));        // Outputs: 'tep'
  console.log(reverseWord('book'));       // Outputs: 'koob'
  
  // Test the stateLandmark function
  console.log(stateLandmark('Pennsylvania'));  // Outputs: 'A landmark in Pennsylvania is the Liberty Bell.'
  console.log(stateLandmark('New York'));      // Outputs: 'A landmark in New York is the Statue of Liberty.'
  console.log(stateLandmark('California'));   // Outputs: 'A landmark in California is the Hollywood Walk of Fame.'
  console.log(stateLandmark('Texas'));        // Outputs: 'A landmark in Texas is the Alamo.'
  console.log(stateLandmark('Florida'));      // Outputs: 'State could not be found.'
  