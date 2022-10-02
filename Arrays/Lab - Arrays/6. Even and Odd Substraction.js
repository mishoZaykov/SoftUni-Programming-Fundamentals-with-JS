function evenOddSubstraction(numbers) {
  let evenNumbers = 0;
  let oddNumbers = 0;

  for(let i = 0; i < numbers.length; i++){
    numbers[i] = Number(numbers[i])
  }
  for (let number of numbers){
    if(number % 2 == 0 ){
      evenNumbers += number;
    }else {
      oddNumbers += number;
    }
  }
  let difference = evenNumbers - oddNumbers;
  console.log(difference);
}evenOddSubstraction([1,2,3,4,5,6])