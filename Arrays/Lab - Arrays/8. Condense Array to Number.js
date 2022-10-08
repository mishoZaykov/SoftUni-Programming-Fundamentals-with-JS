function condenseArrayToNumbers(numbers) {
  let condensed = [];
  let current = 0;
  let second = 0;
  let sum = 0;
  let flag = true;

  while(numbers.length > 1){
    for(let i = 0; i < numbers.length; i++){
      if(i + 1 < numbers.length){
        current = numbers[i];
      second = numbers[i + 1];
      sum += current + second;
      condensed.push(current + second)
      }
    }
    if(condensed.length == 1){
      break;
    }
    numbers = condensed;
    condensed = []
    flag = false; 
  }
  if (flag){ 
    console.log(numbers[0]);
  }else{
    console.log(condensed[0]);
  }
}
condenseArrayToNumbers([2,10,3])
