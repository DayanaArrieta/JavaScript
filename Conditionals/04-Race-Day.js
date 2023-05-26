let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true; // Change to false to test different scenarios
let runnerAge = 25; // Change to test different age scenarios

if (runnerAge > 18 && isRegisteredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isRegisteredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !isRegisteredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk.");
}
