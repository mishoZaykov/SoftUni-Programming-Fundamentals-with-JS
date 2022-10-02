function maxSequenceOfEqualElements(array) {

  let result = [];
  let arrayLength = array.length;
  let maxCount = 0;

  for(let i = 0; i < arrayLength; i++){
    let currentResult = [];
    let count = 0;
    let elementToCompare = array[i];

    for( let j = i; j < arrayLength; j++){
      let element = array[j];

      if(element === elementToCompare ){
        count++;
        currentResult.push(element);
      }else{
        break;
      }
    }
    if(count > maxCount){
      maxCount = count;
      result = currentResult;
    }
   
  }
  console.log(result.join(' '));
}maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])