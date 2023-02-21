
function biscuitFactory(input){
  let biscuitsPerDay = Number(input.shift());
  let workersInFactory = Number(input.shift());
  let biscuitsCompetingForMonth = Number(input.shift());
  let biscuitsPerMonth = 0;
  let differenceBiscuitsPerMonth = 0;
  let differenceBiscuitsPerMonthInPercent = 0;
  let diff = 0;

  for (let index = 1; index <= 30; index++) {
      biscuitsPerMonth += (biscuitsPerDay * workersInFactory); 
      if (index % 3 === 0) {
          differenceBiscuitsPerMonth = Math.floor((biscuitsPerDay * workersInFactory) * 0.25);
          biscuitsPerMonth -= differenceBiscuitsPerMonth;
      }
  }
  console.log(`You have produced ${biscuitsPerMonth} biscuits for the past month.`);

  if (biscuitsPerMonth > biscuitsCompetingForMonth) {
      diff = biscuitsPerMonth - biscuitsCompetingForMonth;
      differenceBiscuitsPerMonthInPercent = (diff / biscuitsCompetingForMonth) * 100;
      console.log(`You produce ${differenceBiscuitsPerMonthInPercent.toFixed(2)} percent more biscuits.`);
  } else {
      diff = biscuitsCompetingForMonth - biscuitsPerMonth;
      differenceBiscuitsPerMonthInPercent = (diff / biscuitsCompetingForMonth) * 100;
      console.log(`You produce ${differenceBiscuitsPerMonthInPercent.toFixed(2)} percent less biscuits.`);
  }

}

biscuitFactory(["65", "12", "10000000000000"]);