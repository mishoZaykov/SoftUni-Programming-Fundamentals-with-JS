function rotateArray(array) {
  let rotatedArray = [];
  let rotations = Number(array[array.length - 1]);
  array.pop();
  for(let i = 0; i < rotations; i++){
    let numberToMove = array.pop();
    array.unshift(numberToMove)
  }
  console.log(array.join(' '));
}rotateArray(['1', '2', '3', '4', '2'])