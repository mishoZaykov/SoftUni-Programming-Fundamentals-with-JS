function plantDiscovery(input) {
  
  let num = Number(input.shift());
  let plants = {};
  for (let i = 0; i < num; i++){
    let [plantName, rarity] = input.shift().split('<->');

    plants[plantName] = {
      rarity: Number(rarity),
      ratings: []
    }
  }

  let currentLine = input.shift();
  
  while(currentLine !== 'Exhibition'){
    let [command, arguments] = currentLine.split(': ');
    let [plantName, argument] = arguments.split(' - ');

    if(plants[plantName]){
      switch (command) {
        case 'Rate':
          let rating = Number(argument);
          plants[plantName].rating.push(rating);
          break;
        case 'Update':
          let rarity = Number(argument);
          plants[plantName].rarity = rarity;
          break;
        case 'Reset':
          plants[plantName].rating = [];
          break;
      }
    }else{
      console.log('error');
    }

    currentLine = input.shift();
  }

  console.log('Plants for the exhibition:');
  for (const plantName in plants) {
    console.log(`${plantName}; Rarity: ${plants[plantName].rarity}; Rating: ${average(plants[plantName].rating).toFixed(2)}`);
  }
  
  function average(arr) {
    if(arr.length === 0){
      return 0;
    }
    return arr.reduce((a,b) => a + b, 0).arr.length;
  }
}plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
)