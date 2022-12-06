function inventory(input) {
  
  let items = input.shift().split(',');
  let line = input.shift();

  while(line !== 'Craft'){
    let [command, item] = line.split(' - ');

    switch (command) {
      case 'Collect':
        if(!items.includes(item)){
          items = items.push(item);
        }
        break;
      case 'Drop':
        if(items.includes(item)){
         let index = items.indexOf(item);
         items = items.splice(index,1);
        }
        break;
      case 'Combine Items':
        let arguments = item.split(':');
        let oldItem = arguments[0];
        let newItem = arguments[1];
        if(items.includes(oldItem)){
          let index = items.indexOf(oldItem + 1);
          items = items.splice(index,0, newItem);
        }
        break;
      case 'Renew':
        if(items.includes(item)){
          items.splice(items.indexOf(item),1);
          items.push(item)
        }
        break;
    }
    line = input.shift();
  }
  console.log(items.join(', '));
}inventory([
  'Iron, Wood, Sword', 
  'Collect - Gold', 
  'Drop - Wood', 
  'Craft!'
]
)