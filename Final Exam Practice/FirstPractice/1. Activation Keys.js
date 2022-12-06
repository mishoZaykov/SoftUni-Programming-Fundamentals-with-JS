function activationKeys(input) {
  // input & result data
  let activationKey = input.shift();
  let instructions = input.slice();
  // loop through instructions
  let instruction = instructions.shift();
  while (instruction !== 'Generate') {
    // apply instruction
    let arguments = instruction.split('>>>');
    let instructionName = arguments.shift();

    switch (instructionName) {
      case 'Contains': {
        let substring = arguments[0];
        if(activationKey.includes(substring)){
          console.log(`${activationKey} contains ${substring}`);
        }else{
          console.log('Substring not found!');
        }
        break;
      }
      case 'Flip':  {
        let casing = arguments[0];
        let startIndex = arguments[1];
        let endIndex = arguments[2];

        let part = activationKey.substring(startIndex, endIndex);
        let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
        activationKey = activationKey.replace(part, newPart);
        console.log(activationKey);
        break;
      }
      case 'Slice': {
        let startIndex = arguments[0];
        let endIndex = arguments[1];
        let substring = activationKey.substring(startIndex,endIndex)
        activationKey = activationKey.replace(substring, '');
        console.log(activationKey);
        break;
      }
    }
    // get next instructiuon
    instruction = instructions.shift();
  }
  // print generated activation key
  console.log(`Your activation key is: ${activationKey}`);
}activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]
)