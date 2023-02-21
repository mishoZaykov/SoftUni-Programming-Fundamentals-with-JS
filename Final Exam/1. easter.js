function easter(input) {
  let string = input.shift();
  let currentLine = input.shift();

  while (currentLine !== 'Easter') {
    let tokens = currentLine.split(' ');
    let command = tokens[0];

    switch (command) {
      case 'Replace':
        let currentChar = tokens[1];
        let newChar = tokens[2];
        while(string.includes(currentChar)){
          string = string.replace(currentChar, newChar);
        }
        console.log(string);
        break;
      case 'Remove':
        let substring = tokens[1];
    
          string = string.replace(substring, '');
          console.log(string);
        
        break;
      case 'Includes':
        let stringIncludes = tokens[1];
        if(string.includes(stringIncludes)){
          console.log('True');
        }else{
          console.log('False');
        }
        break;
      case 'Change':
        let casing = tokens[1];
        if(casing == 'Upper'){
          string = string.toUpperCase();
          console.log(string);
        }else if(casing == 'Lower'){
          string = string.toLowerCase();
          console.log(string);
        }
        break;
      case 'Reverse':
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        //let reversedSubstring = '';
        if(startIndex >= 0 && startIndex < string.length && endIndex >= 0 && endIndex < string.length){
          let reversedSubstring = string.substring(startIndex, endIndex + 1);
          let reverse = reversedSubstring.split('').reverse().join('');
          console.log(reverse);
          
        }
        break;
    }

    currentLine = input.shift();
  }
}easter((['EasteriEggsscomming',
'Replace i I',
'Remove Eggs',
'Remove commIng',
'Change Lower',
'Reverse 0 17',
'Easter'])
)