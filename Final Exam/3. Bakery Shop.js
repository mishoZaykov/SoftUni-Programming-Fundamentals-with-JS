function bakeryShop(input) {
  let foods = {};
  let soldFood = 0;
  let currentline = input.shift();
  while (currentline !== 'Complete') {
    let tokens = currentline.split(' ');
    let command = tokens[0];
    let quantity = Number(tokens[1]);
    let food = tokens[2];
    
    foods[food] = {
      quantity,
    }
    
    switch (command) {
      case 'Receive':
        if(!foods[food]){
          foods[food] = []
        }
        if(quantity <= 0){
          continue
        }
        break;
      case 'Sell':
        
       if(!foods[food]){
        console.log(`You do not have any ${food}.`);
       }
       if(foods[food].quantity < quantity){
         soldFood = foods[food].quantity - quantity;
        delete foods[food];
        console.log(`There aren't enough ${food}. You sold the last ${soldFood} of them.`);
       }else{
        foods[food].quantity - quantity;
        console.log(`You sold ${foods[food].quantity} ${food}.`);
        if(foods[food].quantity === 0){
          delete foods[food];
        }
       }
        break;
    }
    currentline = input.shift();
  }
  
  for (const food in foods) {
    console.log(`${food}: ${foods[food].quantity}`);
  }
  console.log(`All sold: ${soldFood} goods`);
}bakeryShop(["Receive 105 cookies",
"Receive 10 donuts",
"Sell 10 donuts",
"Sell 1 bread",
"Complete"])
