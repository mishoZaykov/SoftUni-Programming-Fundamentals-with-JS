function theImitationGame(arrInput) {

  let array = arrInput.slice(); // правим копие на масива
  let message = array.shift();
  let tempMessage = '';
  let currentLine = array.shift();

  while (currentLine !== 'Decode') {
    
    let tokens = currentLine.split('|');

    let command = tokens[0];

    switch (command) {
      // премества първите дадени букви в края на стринга
      case 'Move':
        let lettersNumber = Number(tokens[1]);
        let lettersToMove = message.substring(0, lettersNumber);
        tempMessage = message.replace(lettersToMove,'');
        tempMessage += lettersToMove;
        message = tempMessage;
        break;
      case 'Insert':
        // добавя дадената сойност преди дадения индех в стринга
        let index = Number(tokens[1]);
        let value = tokens[2];

        tempMessage = message.split('');
        tempMessage.splice(index,0,value);
        message = tempMessage.join('');
        break;
      case 'ChangeAll':
        // сменя всички събстрингове с дадения реплейсмент 
        let substring = tokens[1];
        let replacement = tokens[2];

        while (message.includes(substring)) {
          tempMessage = message.replace(substring, replacement);
          message = tempMessage;
        }
        message = tempMessage;
        break;
    }
    currentLine = array.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode'
]
)
theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode'
]

)