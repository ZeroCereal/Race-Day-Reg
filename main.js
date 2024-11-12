// Generate a random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Boolean variable to indicate if the runner registered early
let regEarly = true;

// Variable to store the runner's age
let age = 18;

// Check if the runner is an adult and registered early
if (age >= 18 && regEarly === true) {
  // Log race time for early adult registrants
  console.log(`${raceNumber} Is your ID for the 10:30 AM Race, Dont lost it.`);
} else if (age >= 18 && regEarly === false) {
  // Log race time for late adult registrants
  console.log(`${raceNumber} Is your ID for the 11:00 AM Race, Dont lost it.`);
} else {
  // Log race time for youth registrants
  console.log(`${raceNumber} Is your ID for the 12:30 PM Race, Dont lost it.`);
}
