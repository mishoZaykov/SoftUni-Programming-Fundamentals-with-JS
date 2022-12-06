function theLift(input) {
  let people = input.shift()
  let currentLiftState = input.shift().split(' ').map(Number);

  for(let i = 0; i < currentLiftState.length; i++){
    let currentWagon = currentLiftState[i];
    if(currentWagon < 4){
      if(people >= 4 ){

        if(currentWagon != 0){
          people -= (4 - currentWagon);
          currentWagon = 4;
          currentLiftState[i] = currentWagon;
          emptySpots = false;
        }else{
          currentWagon = 4;
          people -= currentWagon;
          currentLiftState[i] = currentWagon;
        }
      
      }else{
        
      }
    }
  }

  console.log(currentLiftState);
}theLift([
  "15",
  "0 0 0 0 0"
 ]
 )