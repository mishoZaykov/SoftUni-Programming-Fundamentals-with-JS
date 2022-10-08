function carWash(commands) {
  
  let start = 0;

  for(let command of commands){
    switch (command) {
      case 'soap':
        start += 10;
      break;
      case 'water':
        start += 0.20 * start;
      break;
      case 'vacuum cleaner':
        start += 0.25 * start;
      break;
      case 'mud':
        start = 0.90 * start;
      break;
    }
  }
  console.log(`The car is ${start.toFixed(2)}% clean.`);
}carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])