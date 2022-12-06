function degustationParty(input) {
  let guests = {};
 
  let command = input.shift();
  let unlikeMeal = [];
  while (command !== "Stop") {
    let [action, name, meal] = command.split("-");
 
    switch (action) {
      case "Like":
        if (!guests[name]) {
          guests[name] = [];
          guests[name].push(meal);
        } else {
            if(!guests[name].includes(meal)){
                guests[name].push(meal);
            }
        }
        break;
      case "Dislike":
        if (!guests[name]) {
          console.log(`${name} is not at the party.`);
        } else {
          if (guests[name].includes(meal)) {
            console.log(`${name} doesn't like the ${meal}.`);
            unlikeMeal.push(meal);
            guests[name].splice(guests[name].indexOf(meal), 1);
          } else {
            console.log(
              `${name} doesn't have the ${meal} in his/her collection.`
            );
          }
        }
        break;
    }
    command = input.shift();
  }
  for (const name in guests) {
    console.log(`${name}: ${guests[name].join(", ")}`);
  }
  console.log(`Unliked meals: ${unlikeMeal.length}`);
}degustationParty((["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])
)