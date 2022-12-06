function numbers(input) {
  let nums = input.shift().split(' ').map(Number);


  while (input[0] != 'Finish') {
    let tokens = input.shift().split(' ');
    let command = tokens[0];
    let value = Number(tokens[1]);
    let replacement = Number(tokens[2]);

    switch(command){
      case 'Add':
        let adding = nums.push(value);
        break;
      case 'Remove':
        let index = nums.indexOf(value);
        if(index > -1){
          nums.splice(index, 1)
        }else{
          continue;
        }
        break;
      case 'Replace':
      let indexToReplace = nums.indexOf(value);
      if(indexToReplace > -1){
        nums.splice(indexToReplace, 1, replacement)
      }else{
        continue;
      }
        break;
      case 'Collapse':
        let filtered = nums.filter(num => num > value);
        nums = filtered
        break;
    }
  }
console.log(nums.join(' '));
}numbers(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])
numbers(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])
numbers(["1 20 -1 10",
"Collapse 8",
"Finish"])