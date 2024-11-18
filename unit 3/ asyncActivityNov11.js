// Question 1: Two-Factor Authorization
const name = "JohnDoe";
const passcode = "12345";
const isAuthorized = (name === "JohnDoe") && (passcode === "12345");
console.log("Access Granted:", isAuthorized);

// Question 2: Medical Equipment Management
const requiredECGs = 10;
const receivedECGs = 4;
const requiredOxygenTanks = 6;
const receivedOxygenTanks = 9;

// Check if more equipment is needed or if there is overflow
const ecgAction = receivedECGs < requiredECGs ? "Request more ECG machines" : "Send back overflow ECG machines";
const oxygenTankAction = receivedOxygenTanks > requiredOxygenTanks ? "Send back overflow Oxygen tanks" : "Request more Oxygen tanks";

console.log(ecgAction);
console.log(oxygenTankAction);

// Question 3: Messaging App
const senderMessage = "Hello, how are you?";
const recipient = "JaneDoe";
console.log(`Sending message: "${senderMessage}" to ${recipient}`);

// Explanation of Symbols
/*
= : Assignment operator, used to assign a value to a variable.
&& : Logical AND operator, returns true if both conditions are true.
|| : Logical OR operator, returns true if at least one condition is true.
== : Equality operator, checks if two values are equal (does not check type).
*/

