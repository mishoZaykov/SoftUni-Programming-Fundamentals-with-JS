function heartDelivery(input) {
  // parse input
  let houses = input.shift().split("@").map(Number);
  let cupid = 0;
  // until Love! parse and execute command
  while (input[0] != "Love!") {
    // - get jump size
    let tokens = input.shift().split(" ");
    let jump = Number(tokens[1]);
    // - apply jump
    cupid += jump;
    // - if Cupid is outside the hood, return him to first house (index0)
    if (cupid >= houses.length) {
      cupid = 0;
    }
    // - if current house requires 0 hearts, print message
    if (houses[cupid] == 0) {
      console.log(`Place ${cupid} already had Valentine's day.`);
    } else {
      // - otherwise, deliver hearts to current house
      houses[cupid] -= 2;
      if(houses[cupid] == 0){
      // - if current house has enoug hearts, print message
      console.log(`Place ${cupid} has Valentine's day.`);
      }
    }
  }

  // print result
  let missed = 0;
  for(let house of houses){
    if(house > 0){
      missed++;
    }
  }
  console.log(`Cupid's last position was ${cupid}.`);
  if(missed > 0){
    console.log(`Cupid has failed ${missed} places.`);
  }else{
    console.log(`Mission was successful.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
