function bombNumbers(sequence, specialNumbers) {

  let sum = 0;
  let bombNumber = specialNumbers[0];
  let power = specialNumbers[1];

  for(let i = 0; i < sequence.length; i++){
    if(sequence[i] === bombNumber){
      let bombIndex = sequence.indexOf(bombNumber)
      let startIndex = Math.max(bombIndex - power, 0)
      sequence.splice(bombIndex, power + 1)
      sequence.splice(startIndex,power)
      i = 0;
    }
  }
  for (const el of sequence) {
    sum+= el;
  }
  console.log(sum);

}bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])