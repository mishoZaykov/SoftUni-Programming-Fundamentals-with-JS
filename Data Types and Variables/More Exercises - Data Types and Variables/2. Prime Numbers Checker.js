function primeNumbersChecker(num) {
  let prime = true;
  for(let divider = 2; divider <= Math.sqrt(num); divider++){
    if(num % divider === 0){
      prime = false;
      break;
    }
  }
  console.log(prime);
}primeNumbersChecker(81)