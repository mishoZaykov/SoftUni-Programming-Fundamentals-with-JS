function speiceMustFlow(startingYield) {
  let restYield = 0;
  let crewConsumes = 26;
  let days = 0;

  while (startingYield >= 100) {
    days++;
    restYield += startingYield - crewConsumes;
    startingYield -= 10;
  }

  if(startingYield<100 && days == 0){
    console.log(days);
    console.log(restYield);
  }else{
    restYield -= crewConsumes;
    console.log(days);
    console.log(restYield);
  }
  
}speiceMustFlow(111)