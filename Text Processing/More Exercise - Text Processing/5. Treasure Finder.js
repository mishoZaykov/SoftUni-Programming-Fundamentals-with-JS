function treasureFinder(input) {
  let key = input.shift().split(" ");

  while (input[0] !== "find") {
    let string = input.shift();
    let decripted = "";
    let count = 0;

    while (count < string.length) {
      for (let i = 0; i < key.length; i++) {
        if (count === string.length) {
          break;
        }
        let currrentNumber = Number(key[i]);
        let curentLetter = string[count].charCodeAt();
        count++;
        let decryptedChar = String.fromCharCode(curentLetter - currrentNumber);
        decripted += decryptedChar;
      }
    }

    let firstIndexType = decripted.indexOf("&");
    let lastIndexType = decripted.lastIndexOf("&");
    let typeTeasure = decripted.substring(firstIndexType + 1, lastIndexType);

    let firstTypeCoordinate = decripted.indexOf("<");
    let secondTypeCoordinate = decripted.lastIndexOf(">");
    let coordinates = decripted.substring(
      firstTypeCoordinate + 1,
      secondTypeCoordinate
    );

    console.log(`Found ${typeTeasure} at ${coordinates}`);
  }
}
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
