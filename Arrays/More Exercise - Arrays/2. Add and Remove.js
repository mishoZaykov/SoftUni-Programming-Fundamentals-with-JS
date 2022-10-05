function addAndRemove(array) {
  let numbers = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'add'){
      numbers.push(i + 1)
    }else {
      numbers.pop()
    }
    if(array === 0){
      console.log('Empty');
    }
  }
  console.log(numbers.join(' '));
}addAndRemove(['remove', 'remove', 'remove'])