function memoryGame(input) {
  // parse elements
  let elements = input.shift().split(' ');
  let moves = 0
  // until we recieve End do stuff
  while(elements.length > 1 && input[0].toLowerCase() !== 'end'){

    let [firstIndex, secondIndex] = input.shift().split(' ');

    firstIndex = Number(firstIndex);
    secondIndex = Number(secondIndex);

    moves++;

    if(firstIndex < 0

      || firstIndex >= elements.length

      || firstIndex === secondIndex

      || secondIndex < 0

      || secondIndex >= elements.length){

        let index = Math.trunc(elements.length / 2);
        let symbol = '-' + moves + 'a';
        elements.splice(index, 0, symbol, symbol);

        console.log('Invalid input! Adding additional elements to the board');
      }else{
        let firstNumber = elements[firstIndex];
        let secondNumber = elements[secondIndex];
        
        if(firstNumber === secondNumber){
          elements.splice(firstIndex, 1);
          secondIndex = elements.indexOf(secondNumber);
          elements.splice(secondIndex, 1);

          console.log(`Congrats! You have found matching elements - ${firstNumber}!`);
        }else if (firstNumber !== secondNumber){
          console.log('Try again!');
        }
      }
    
  }

  if(elements.length === 0 || elements.length === 1){
    console.log(`You have won in ${moves} turns!`);
  }else{
    console.log('Sorry you lose :(');
    console.log(`${elements.join(' ')}`);
  }
  
}
memoryGame([
  "1 1 2 2 3 3 4 4 5 5", 
  "1 0",
  "-1 0",
  "1 0", 
  "1 0", 
  "1 0", 
  "end"])