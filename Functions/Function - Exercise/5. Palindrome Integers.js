function palindromeIntegers(numberArray) {
  let numberArrayLenght = numberArray.length;
  for (let index = 0; index < numberArrayLenght; index++) {
    let numberAsSting = numberArray[index].toString();
    let reversedString = numberAsSting.split("").reverse().join("");

    if (numberAsSting === reversedString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
