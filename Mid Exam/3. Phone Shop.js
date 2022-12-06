function phoneShop(input) {
  let phoneList = input.shift().split(', ')
  let commands = input.slice();
  let currentLine = commands.shift();

  while(currentLine != 'End'){
    let lineArgs = currentLine.split(' - ')
    let command = lineArgs[0];
    let firstArgument = lineArgs[1];
    let secondArgument = lineArgs[2];

    switch(command){
      case 'Add':
        if(!phoneList.includes(firstArgument)){
          phoneList.push(firstArgument)
        }
        break;
      case 'Remove':
        let phoneIndex = phoneList.indexOf(firstArgument);

        if(phoneIndex > -1){
          phoneList.splice(phoneIndex, 1)
        }
        break;
      case 'Bonus phone':
        
        let addPhone = phoneList.indexOf(firstArgument);

        if(addPhone > -1 ){
          phoneList.splice(addPhone,0, secondArgument)
        }
        break;
      case 'Last':
        let removePhone = phoneList.indexOf(firstArgument);
        if(removePhone > -1){
          let element = phoneList[removePhone];
          phoneList.splice(removePhone, 1);
          phoneList.push(element)
        }
        break;
    }
    currentLine = commands.shift();
  }

  console.log(phoneList.join(', '));
}
phoneShop((["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])
)


