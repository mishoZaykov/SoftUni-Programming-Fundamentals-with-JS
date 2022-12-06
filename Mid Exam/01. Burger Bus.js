function burgerBus(input) {
  let visitedCities = input.shift();
  let totalProfit = 0
  for(let i = 0; i < visitedCities; i++){
    let cityName = input.shift();
    let income = input.shift()
    let expenses = input.shift()
    let profit = income - expenses
    if(i === 0){
      console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
      totalProfit += profit;
    }
    if (i === 1) {
      console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
      totalProfit += profit;
    }
    if(i === 2){
      let event = expenses * 0.5;
      profit -=event
      console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
      totalProfit += profit;
    }

  }
  console.log(`Burger Bus total profit: ${totalProfit} leva.`);
}burgerBus(["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"])