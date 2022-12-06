function secretChat(input) {
  let message = input.shift();
  let line = input.shift();
  let tempMessage = '';

  while (line !== 'Reveal') {
    let tokens = line.split(':|:');
    let command = tokens[0];
    switch (command) {
      // Добавяне на символ на даден индех в стринг
      case 'InsertSpace':
        let index = tokens[1];
        let firstHalf = message.substring(0, index);
        let secondHalf = message.substring(index);

        message = firstHalf + ' ' + secondHalf;
        console.log(message);
        break;
      case 'Reverse':
        // Изрязваме събстринга, обръщаме го и го добавяме накрая на стринга
        let substring = tokens[1];

        if(message.includes(substring)){
          let index = message.indexOf(substring);
          let secondPart = message
          .substring(index, index + substring.length)
          .split('')
          .reverse()
          .join('');
          let firstPart = message.substring(0,index);
          let thirdPart = message.substring(index + substring.length);
          message = firstPart + thirdPart + secondPart;
          console.log(message);
        }else{
          console.log('error');
        }
        break;
      case 'ChangeAll':
        // Заместваме всичко от събстринга с реплейсмента
        let sub = tokens[1];
        let replacement = tokens[2];

        while(message.includes(sub)){
          tempMessage = message.replace(sub, replacement);
          message = tempMessage
        }
        message = tempMessage
        console.log(message);

        break;
    }
    
    line = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'])