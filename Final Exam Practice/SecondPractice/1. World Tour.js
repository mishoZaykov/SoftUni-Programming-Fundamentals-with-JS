function worldTour(input) {
  
  let stops = input.shift();
  let line = input.shift();

  while (line !== 'Travel') {
    let tokens = line.split(':');
    let command = tokens[0];
    switch (command) {
      case 'Add Stop':
        // Добавяне на символ на даден индех в стринг
        let index = Number(tokens[1]);
        let string = tokens[2];
        if (index >= 0 && index < stops.length) {
          let insert = stops.slice(0, index) + string + stops.slice(index)
          stops = insert
        }
        console.log(stops);
        break;
      case 'Remove Stop':
        // Премахваме елементите от стринга от началния индех до крайният
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        
        if(startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length){
          let remove = stops.slice(0,startIndex) + stops.slice(endIndex + 1);
          stops = remove;
        }
        console.log(stops);
        break;
      case 'Switch':
        // Ако старият стринг се съдържа го заместваме с новият навсякъде
        let oldString = tokens[1];
        let newString = tokens[2];

        if(stops.includes(oldString)){
          let regExp = new RegExp(`${oldString}`, 'g'); // търси всички съвпоадения на стринга
          let replaced = stops.replace(regExp, newString);
          stops = replaced;
        }
        console.log(stops);
        break
    }

    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);

}worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
)