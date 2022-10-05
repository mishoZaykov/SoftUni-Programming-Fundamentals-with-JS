function printNthElement(array) {
  let elements = [];
  let nStep = Number(array[array.length - 1]);
  for(let i = 0; i < array.length - 1; i+= nStep){
    elements.push(array[i]);
  }
  console.log(elements.join(' '));
}printNthElement(['5', '20', '31', '4', '20', '2'])