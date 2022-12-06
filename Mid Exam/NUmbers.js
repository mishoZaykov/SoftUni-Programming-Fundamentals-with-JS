function numbers(input){
  let rowNumbers = input.shift();
  let commands = input.slice();
  let numbers = rowNumbers.split(' ');
  let currentLine = commands.shift();

  while (currentLine != 'Finish') {
      let lineArgs = currentLine.split(' ');
      let command = lineArgs[0];
      let firsArgument = lineArgs[1];
      let secondArgument = lineArgs[2];

      switch (command) {
          case 'Add':
              numbers.push(firsArgument);
              break;
          case 'Remove':
              const indexRemove = numbers.indexOf(firsArgument);
              if (indexRemove > -1) {
                  numbers.splice(indexRemove, 1);
              }
              break;
          case 'Replace':
              const indexReplace = numbers.indexOf(firsArgument);
              if (indexReplace > -1) {
                  numbers[indexReplace] = secondArgument;
              }
              break;
          case 'Collapse':
              for (let index = 0; index < numbers.length; index++) {
                  let num = numbers[index];
                  if (Number(num) < Number(firsArgument)) {
                      const indexCollapse = numbers.indexOf(num);
                      if (indexCollapse > -1) {
                          numbers.splice(indexCollapse, 1);
                      }
                  }
              }
              break;
          }
      currentLine = commands.shift();
  }
      console.log(numbers.join(' '));
}

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Collapse 8", "Finish"]);