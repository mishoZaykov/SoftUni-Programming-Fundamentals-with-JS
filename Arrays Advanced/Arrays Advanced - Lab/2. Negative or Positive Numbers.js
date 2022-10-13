function negativePositiveNumbers(input) {
  let numbers = [];

  for( element of input){
    let number = Number(element);

    if(number < 0){
      numbers.unshift(number);
    }else{
      numbers.push(number);
    }
   
  } 
  for( number of numbers){
    console.log(number);
  }
  
}negativePositiveNumbers(['7', '-2', '8', '9'])