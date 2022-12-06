function asciiSumator(input) {
  
  let [firstChar, secondChar, string] = input;

  firstChar = firstChar.charCodeAt();
  secondChar = secondChar.charCodeAt();
  let result = 0;

  for(let i = 0; i < string.length; i++){
    let currentChar = string[i].charCodeAt();
    if(currentChar > firstChar && currentChar < secondChar && firstChar < secondChar){
      result += currentChar;
    }else if(currentChar < firstChar && currentChar > secondChar && firstChar > secondChar){
      result += currentChar;
    }
  }

  console.log(result);
}asciiSumator(['.',
'@',
'dsg12gr5653feee5']
)