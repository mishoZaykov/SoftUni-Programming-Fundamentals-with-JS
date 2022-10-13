function arrayManipulations(commands) {
  let arrOfNumbers = commands
    .shift()
    .split(' ')
    .map(Number);

  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i].split(' ');
    let command = currentCommand[0];
    let firstNum = Number(currentCommand[1]);
    let secondNum = Number(currentCommand[2]);
    

    switch (command) {
      case "Add":
        add(firstNum)
        break;
      case "Remove":
        remove(firstNum)
        break;
      case "RemoveAt":
        removeAt(firstNum)
        break;
      case "Insert":
        insert(firstNum, secondNum)
        break;
    }
  }

  function add(number) {  
    arrOfNumbers.push(number);
  }
  function remove(number) {
    arrOfNumbers = arrOfNumbers.filter((el) => el !== number)
  }
  function removeAt(index) {
    arrOfNumbers.splice(index, 1);
  }
  function insert(number, index) {
    arrOfNumbers.splice(index, 0, number)
  }

  console.log(arrOfNumbers.join(' '));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
