function fancyBarcodes(input) {

  let count = input.shift();

  for (let barcodes of input) {
    // Почваме с @ и #(безброй) => После имаме главна буква, после поне 4 главни или малки букви,
    // може и цифри и завършва с главна буква(ОБЩО ПОНЕ 6 СИМВОЛА) => Завършва пак с @ и #(безброй)
    let pattern = /@#+[A-Z]([A-Za-z0-9]){4,}[A-Z]@#+/g;
    
    let matched = barcodes.match(pattern);  // Взимаме съвпадението на патерна с баркода

    if (matched === null) {
      console.log("Invalid barcode");
    } else {
      let group = "";
      for (let character of matched[0]) {
        if (character.charCodeAt() >= 48 && character.charCodeAt() <= 57) { // Ако буквата е ЦИФРА от 0 до 9 
          group += character;
        }
      }
      if (group.length === 0) {
        console.log("Product group: 00");
      } else {
        console.log(`Product group: ${group}`);
      }
    }
  }
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
