function smallestTwoNumbers(numbers) {
  
  let sortedNumbers = numbers.sort((a, b) => a - b);
  let smallestNumbers = sortedNumbers.slice(0, 2)
  console.log(smallestNumbers.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])