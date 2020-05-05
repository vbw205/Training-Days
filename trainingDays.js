// Get event
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0)
    {return 'Marathon'}
  else if (random === 1)
    {return 'Triathlon'}
  else if (random === 2)
    {return 'Pentathlon'}
};

// Get training days 
const getTrainingDays = event => {
  let days;
    if (event === 'Marathon')
      {days = 50}
    else if (event === 'Triathlon')
      {days = 100}
    else if (event === 'Pentathlon')
      {days = 200}
  return days;
};

// Log the event
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}.`)
};

// Log training days
const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days.`)
};

// test 1
let name= 'Nala';
let event = getRandEvent();
let days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

//test 2
name = 'Warren';
event = getRandEvent()
days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);
