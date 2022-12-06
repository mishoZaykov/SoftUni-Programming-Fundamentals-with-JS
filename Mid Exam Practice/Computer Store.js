function computerStore(input) {
  let totalPrice = 0;
  let typeOfClient = input.pop().toLowerCase ();
  
  for (const price of input) {
    let priceForPart = Number(price);
    if(priceForPart > 0){
      totalPrice += priceForPart;
    }else{
      console.log('Invalid price!');
      continue;
    }
  }
  if(totalPrice === 0){
    return console.log('Invalid order!');
  }
  
  let taxes = totalPrice * 0.2
  let priceWithTax = totalPrice + taxes;
  

  if(typeOfClient == 'special'){
    priceWithTax = priceWithTax - (priceWithTax * 0.1);
  }
  
  console.log('Congratulations you\'ve just bought a new computer!');
  console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log('-----------');
  console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
}computerStore([
  '1050',
  '200',
  '450',
  '2',
  '18.50',
  '16.86',
  'special'
  ])