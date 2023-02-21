function paintingNUmber(input) {
  let nums = input.shift().split(' ').map(Number);
  let currentLine = input.shift();

  while (currentLine != 'END') {
    let lineArgs = currentLine.split(' ');
    let command = lineArgs[0];
    let firstArgument = Number(lineArgs[1]);
    let secondArgument = Number(lineArgs[2]);

    switch (command) {
      case 'Change':
        let indexToReplace = nums.indexOf(firstArgument);

        if(indexToReplace > -1){
          nums.splice(indexToReplace, 1, secondArgument)
        }
        break;
      case 'Hide':
        let index = nums.indexOf(firstArgument);
        if(index > -1){
          nums.splice(index, 1);
        }
        break;
      case 'Switch':
        let paintingNumber1 = nums.indexOf(firstArgument);
        let paintingNumber2 = nums.indexOf(secondArgument);

        if(paintingNumber1 > -1 && paintingNumber2 > -1){
          let temp = nums[paintingNumber1];
          nums[paintingNumber1] = nums[paintingNumber2];
          nums[paintingNumber2] = temp;
        }
        break;
      case 'Insert':
        if(firstArgument > -1 && firstArgument < nums.length){
          nums.splice(firstArgument + 1, 0, secondArgument);
        }
        break;
      case 'Reverse':
        nums.reverse();
        break;
    }
    currentLine = input.shift();
  }
  console.log(nums.join(' '));
}paintingNUmber((["115 101 114 73 111 116 75",
"Insert 5 114",
"Switch 116 73",
"Hide 76",
"END"])
)