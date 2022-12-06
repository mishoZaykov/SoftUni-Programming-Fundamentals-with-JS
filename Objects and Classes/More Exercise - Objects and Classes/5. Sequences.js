function sequences(input) {

  input = input.map(el => JSON.parse(el));
  input.forEach(el => el.sort((a,b) => b - a));
  let outputArrays = [];

  for(let i = 0; i < input.length; i++){
    let currentArray = input[i];
    let isUnique = true;

    for(let j = 0; j < outputArrays.length; j++){
      let nextArray = outputArrays[j];
      if(currentArray.toString() === nextArray.toString()){
        isUnique = false;
        break;
      }
    }

    if(isUnique){
      outputArrays.push(currentArray)
    }
  }
  outputArrays.sort((a, b) => a.length - b.length);
  for (const el of outputArrays) {
    console.log(`[${el.join(', ')}]`);
  }

  
}
sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
