function condenseArrayToNumber(array) {
  let condensedArray = [array.length - 1];

  if (array.length === 1) {
    console.log(array[0]);
    return;
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < condensedArray.length; j++) {
      condensedArray[j] = array[j] = array[j + 1];
    }
    array = condensedArray;
  }
  console.log(condensedArray[0]);
}
condenseArrayToNumber([2, 10, 3]);
