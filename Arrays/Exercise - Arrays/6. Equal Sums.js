function equalSums(array) {
  let foundIndex = "no";
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // calculates left sum
    for (let l = 0; l < i; l++) {
      leftSum = leftSum + array[l];
    }
    // calculates right sum
    for (let r = i + 1; r < arrayLength; r++) {
      rightSum = rightSum + array[r];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);
