function bitcoinMining(input) {
  let totalMoney = 0;
  let gold = 0;
  let bitcoins = 0;
  let daysCounter = 0;
  let firstBitcoinPurchase = 0;
  let goldPrice = 67.51;
  let bitcoinPrice = 11949.16;

  for (let i = 0; i <= input.length; i++) {
    daysCounter++;
    let totalMoney = input[i];
    let currentBitcoins = 0;

    if(daysCounter === 0){
      totalMoney *= 0.70
    }

    totalMoney *=goldPrice;
    gold += totalMoney

    if(gold >bitcoinPrice){
      bitcoins++;
      if(bitcoins === 1){
        firstBitcoinPurchase = i + 1;
      }
      currentBitcoins = Math.floor(totalMoney / bitcoinPrice);
      gold = gold - bitcoinPrice * currentBitcoins;
      bitcoins +=currentBitcoins
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0 ){
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinPurchase}`);
  }
  console.log(`Left money: ${gold.toFixed(2)} lv.`);
}bitcoinMining([100, 200, 300])