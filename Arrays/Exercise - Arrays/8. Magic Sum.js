function magicSum(array, number) {

  for(let i = 0; i < array.length; i++){

    let firstNum = array[i];

    for(let j = i + 1; j < array.length; j++){
      let secondNum = array[j];
      if(firstNum + secondNum === number){
        let result = [firstNum, secondNum]
        console.log(result.join(' '));
      }
    }
  }
}magicSum([1, 7, 6, 2, 19, 23], 8)