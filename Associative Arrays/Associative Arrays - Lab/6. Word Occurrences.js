function worldOccurances(input) {
  let result = {};

  for (const words of input) {
    if (result.hasOwnProperty(words)) {
      result[words]++;
    } else {
      result[words] = 1;
    }
  }

  let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (const [word, occurances] of sorted) {
    console.log(`${word} -> ${occurances} times`);
  }
}
worldOccurances([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
