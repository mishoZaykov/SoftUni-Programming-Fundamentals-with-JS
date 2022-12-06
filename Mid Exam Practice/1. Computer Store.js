function computerStore(input) {
  
  let totalPrice = 0;
  let customer = input.pop();

  for (const price of input) {
    let partPrice = Number(price);

    if(partPrice > 0){
      totalPrice += partPrice;
    }else{
      console.log('Invalid Price');
      continue;
    }
  }
  
  if(totalPrice === 0){
    console.log('Invalid order');
    
  }
  let taxes = totalPrice * 0.2;
  let priceWithTax = taxes + totalPrice;

  if(customer === 'special'){
    priceWithTax = priceWithTax - (priceWithTax * 0.1)
  }

  console.log('Congratulations you\'ve just bought a new computer');
  console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log('-----------');
  console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
}computerStore(([
  '1050',
  '200',
  '450',
  '2',
  '18.50',
  '16.86',
  'special'
  ])
  )