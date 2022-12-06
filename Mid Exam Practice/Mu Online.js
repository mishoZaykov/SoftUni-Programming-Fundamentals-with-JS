function muOnline(input) {
// split array
let health = 100;
let bitcoin = 0;
let completedRooms = 0;
let rooms = input.split('|');


// until we die or we clear all rooms execute command
while(health > 0){
  let currentRoom = rooms.shift().split(' ')
  let command = currentRoom[0];
  let amount = Number(currentRoom[1])
  completedRooms++;
  switch(command){
    case 'potion': // gaining health
      let currentHealth = health + amount;
      if(currentHealth < 100){
        health += amount;
        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${currentHealth} hp.`);
      }else{
        let healedAmount = (100 + amount) - currentHealth;
        health +=healedAmount
        console.log(`You healed for ${healedAmount} hp.`);
        console.log(`Current health: ${health} hp.`);
      }     
      break;
    case 'chest': // finding bitcoins
      bitcoin += amount;
      console.log(`You found ${amount} bitcoins.`);
      break;
    default: // fighting monsters
    health -= amount
    if(health > 0){
      console.log(`You slayed ${command}.`);
      
    }else{
      console.log(`You died! Killed by ${command}.`);
      console.log(`Best room: ${completedRooms}`);
    }
      break;
  }
}

//print result
console.log('You\'ve made it!');
console.log(`Bitcoins: ${bitcoin}`);
console.log(`Health: ${health}`);
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")