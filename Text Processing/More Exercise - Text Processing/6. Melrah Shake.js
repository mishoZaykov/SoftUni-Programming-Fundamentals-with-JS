function melrahShake(input) {
  
  let [string, pattern] = input;

  while(pattern.length > 0){
    let firstMatch = string.indexOf(pattern);
    let lastMatch = string.lastIndexOf(pattern);

    if(firstMatch !== lastMatch &&(firstMatch > -1 && lastMatch > - 1)){

      string = string.split('');
      string.splice(firstMatch,pattern.length);
      string = string.join('');
      lastMatch = string.lastIndexOf(pattern);
      string = string.split('');
      string.splice(lastMatch, pattern.length);
      string = string.join('');
      let letterToDelete = pattern[Math.floor(pattern.length/2)];
      pattern = pattern.replace(letterToDelete, '');
      console.log('Shaked it.');
    }else{
      break;
    }
  }
  console.log('No shake.');
  console.log(string);
  
}melrahShake(['astalavista baby',
'sta']
)