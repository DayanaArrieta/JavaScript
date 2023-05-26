const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 8;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 7;
    default:
      return 0; // Return 0 for an invalid day
  }
};

const getActualSleepHours = () => {
  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  let totalSleepHours = 0;
  for (let day of daysOfWeek) {
    totalSleepHours += getSleepHours(day);
  }
  return totalSleepHours;
};

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); // Change the argument to your preferred ideal hours

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    const sleepDebt = actualSleepHours - idealSleepHours;
    console.log(`You got more sleep than needed. You overslept by ${sleepDebt} hours.`);
  } else {
    const sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest. You are ${sleepDebt} hours behind your ideal sleep.`);
  }
};

calculateSleepDebt();
