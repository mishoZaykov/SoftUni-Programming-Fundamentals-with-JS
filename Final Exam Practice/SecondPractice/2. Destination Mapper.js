function destinationMapper(str) {
  
  let points = 0;
  let destinations = [];
  const regex = /([=\/])[A-Z][A-Za-z]{2,}\1/gm; // трябва от двете страни на думата да има или (= или /), след първия знак само букви като първата е главна а останалите може да са главни или малки и думите трябва да са поне 3 букви
  const found = str.match(regex); // намираме думитте

  // изчисляваме точките за пътуване, като сумираме дължината на всяка от валидните думите
  if(found){
    found.forEach((el,i) => {
      el = el.substring(1, el.length-1);
      points += el.length;
      destinations.push(el);
    });
  }
  
  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${points}`);

}destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="); 