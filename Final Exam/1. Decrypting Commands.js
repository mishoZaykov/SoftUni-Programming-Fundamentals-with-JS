function commnads(input) {

  let string = input.shift();
  let currentLine = input.shift();
  
  while (currentLine !== 'Finish') {
    let tokens = currentLine.split(' ');
    let command = tokens[0];

    switch (command) {
      case 'Replace':
        let currentChar = tokens[1];
        let newChar = tokens[2];
        while (string.includes(currentChar)) {
          string = string.replace(currentChar, newChar)
        }
        console.log(string);
        break;
      case 'Cut': // da se opravi
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);

        if(startIndex >= 0 && startIndex < string.length && endIndex >= 0 && endIndex < string.length){
          let replaced = string.substring(startIndex , endIndex + 1);
          string = string.replace(replaced, '');
          console.log(string);
        }else{
          console.log('Invalid indices!');
        }
        break;
      case 'Make': 
        let casing = tokens[1];
        if(casing == 'Upper'){
          string = string.toUpperCase();
          console.log(string);
        }else if(casing == 'Lower'){
          string = string.toLowerCase();
          console.log(string);
        }
        break;
      case 'Check':
        let message = tokens[1];
        if(string.includes(message)){
          console.log(`Message contains ${message}`);
        }else{
          console.log(`Message doesn't contain ${message}`);
        }
        break;
      case 'Sum':
        let startIndexSum = Number(tokens[1]);
        let endIndexSum = Number(tokens[2]);
        let sum = 0;
        if(startIndexSum >= 0 && startIndexSum < string.length && endIndexSum >= 0 && endIndexSum < string.length){
          let substring = string.substring(startIndexSum , endIndexSum + 1);
          console.log(substring);
          for (let char of substring) {
            let value = substring.charCodeAt(char);
            sum += value
          }
          console.log(sum);
        }else{
          console.log('Invalid indices!');
        }
        break;
    }
    currentLine = input.shift();
  }
  
}commnads((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
)