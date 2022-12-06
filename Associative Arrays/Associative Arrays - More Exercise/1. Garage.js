function garage(input) {

  let garages = {};

  input.forEach(line => {
    let [garage, carInfo] = line.split(' - ');
    if(!garages.hasOwnProperty(garage)){
      garages[garage] = [];
    }
     garages[garage].push(carInfo);
  });

  let output = '';

  for (let [garage, cars] of Object.entries(garages)) {
    output += `Garage № ${garage}\n`;

    for (let car of cars) {
      while(car.includes(': ')){
        car = car.replace(': ', ' - ');
      }
      output += `--- ${car}\n`
    }
    
  }

  console.log(output);
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
