function nonDecreasingSubset(array) {
  let biggest = 0;
  let filteredArray = [];
  let arayLength = array.length;
  for(let i = 0; i < arayLength; i++){
    if(array[i] >= biggest){
      biggest = array[i];
      filteredArray.push(biggest);
    }
  }
  console.log(filteredArray.join(' '));
}nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])