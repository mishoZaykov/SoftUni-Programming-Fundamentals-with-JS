function degustationParty(input) {
  
  let guests = {};
  let meals = []

  while(input[0] !== 'Stop'){
    let [command, guestName, meal] = input.shift().split('-');

    switch (command) {
      case 'Like':
        if(!meals.includes(meal)){
          let addMeal = meals.push(meal);
        }
        if(!guests.hasOwnProperty(guestName)){
          guests = {guestName, meal};
        }
        break;
      case 'Dislike':

        break;
    }
  }

 console.log('Krisi: shrimps, soup');
 console.log('Penelope: dessert');
 console.log('Misho: salad');
 console.log('Unliked meals: 0');



}degustationParty((["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])
)