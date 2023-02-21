function giftBox(input) {

let sizeOfSide = Number(input.shift());
let sheetsOfPaper = Number(input.shift());
let totalSheetsArea = 0;
let area = sizeOfSide * sizeOfSide * 6;


for(let i = 1; i <= sheetsOfPaper; i++){
  let lengthOfSheet = Number(input.shift());
  let widthOfSheet = Number(input.shift());
  
  let sheetArea = lengthOfSheet * widthOfSheet
 
  if(i % 3 === 0){
    sheetArea = (lengthOfSheet * widthOfSheet) * 0.75
  }
  if(i % 5 === 0){
    sheetArea = 0
  }
  
  totalSheetsArea += sheetArea;
}
if(area > totalSheetsArea){
  let totalAreaCovered = 100 - ((totalSheetsArea/ area) * 100);
  console.log('You are out of paper!');
  console.log(`${totalAreaCovered.toFixed(2)}% of the box is not covered.`);
}else{
  let areaCovered = ((totalSheetsArea - area) / totalSheetsArea) * 100;
  console.log('You\'ve covered the gift box!');
  console.log(`${areaCovered.toFixed(2)}% wrap paper left.`);
}

}
giftBox((["10",
"5",
"3",
"0.5",
"2.4",
"5",
"3.7",
"1",
"3",
"34.7",
"5",
"80"])
)