function charactersInRange(firstChar,secondChar) {

  let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt())
  let resultString = ''
  
  for(let  cutrrentChar= rangeStart + 1; cutrrentChar < rangeEnd; cutrrentChar++){
    let singleChar = String.fromCharCode(cutrrentChar);

    if(cutrrentChar + 1 === rangeEnd){
      resultString += `${singleChar}` 
    }else{
      resultString += `${singleChar} ` 
    }
  }

  console.log(resultString);
}
charactersInRange('#', ':')