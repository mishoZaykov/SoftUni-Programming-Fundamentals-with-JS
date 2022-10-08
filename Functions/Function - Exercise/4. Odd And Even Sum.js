function oddAndEvenSum(number) {
  let numberAsString = number.toString();
  let evenSum = 0;
  let oddSum = 0;
  let numberAsStringL = numberAsString.length;
  for (let index = 0; index < numberAsStringL; index++) {
    let singleNumber = Number(numberAsString[index]);

    if (singleNumber % 2 === 0) {
      evenSum += singleNumber;
    } else {
      oddSum += singleNumber;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
