function chessBoard(num) {
  let currentColour = 'black';
  let previousColour = '';
  console.log('<div class="chessboard">');

  for(let rows = 1; rows<= num; rows++){
    console.log('  <div>');

    for(let columns = 1; columns <= num; columns++){
      console.log(`    <span class="${currentColour}"></span>`);

      previousColour = currentColour;
      currentColour = previousColour === 'black' ? 'white' : 'black'
    }

    console.log('  </div>');
    if(num % 2 === 0){
      previousColour = currentColour;
      currentColour = previousColour === 'black' ? 'white' : 'black'
    }
  }

  console.log('</div>');
}chessBoard(3)