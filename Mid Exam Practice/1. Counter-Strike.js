function counterStrike(input) {
  let energy = Number(input.shift());
  let wonBattles = 0;

  for (const commands of input) {
    if(commands !== 'End of battle'){
      let distance = Number(commands);
      if(energy - distance < 0){
        console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
        return;
      }
      energy -= distance;
      wonBattles++;
    }else{
      console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
    }
    

    if(wonBattles % 3 == 0){
      energy += wonBattles;
    }
  }
 
}counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
