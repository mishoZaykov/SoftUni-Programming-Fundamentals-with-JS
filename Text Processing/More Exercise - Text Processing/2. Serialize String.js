function serializeString(input) {
  
  input = input[0];
  let letters = {};

  for (let index = 0; index < input.length; index++) {
    let currentLetter = input[index];
    if(!letters.hasOwnProperty(currentLetter)){
      letters[currentLetter] = [index];
    }else{
      letters[currentLetter].push(index);
    }
  }

  for (const letter in letters) {
    console.log(`${letter}:${letters[letter].join('/')}`);
  }
}serializeString(["abababa"])