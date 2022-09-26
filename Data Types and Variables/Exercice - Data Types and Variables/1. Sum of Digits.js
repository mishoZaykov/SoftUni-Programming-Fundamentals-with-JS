function sumOfDigits(number) {
  let stringNumners = number.toString();
  let sum = 0;
  for(let i = 0; i < stringNumners.length; i++){
    sum += Number(stringNumners[i]);
  }
  console.log(sum);
}sumOfDigits(245678)