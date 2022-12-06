function valueOfAString(input) {
  
  let [word, type] = input;
  let sum = 0;

  for (let index = 0; index < word.length; index++) {
    let currentLetter = word[index];
    if(type === "LOWERCASE" ){
      if(currentLetter.toLowerCase() === currentLetter){
        if(currentLetter.charCodeAt() >= 97 && currentLetter.charCodeAt() <= 122){
          sum += currentLetter.charCodeAt();
        }
      }
    }else if(type === "UPPERCASE" ){
      if(currentLetter.toUpperCase() === currentLetter){
        if(currentLetter.charCodeAt() >= 65 && currentLetter.charCodeAt() <= 90){
          sum += currentLetter.charCodeAt();
        }
      }
    }
  }
  console.log(`The total sum is: ${sum}`);


}valueOfAString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
)