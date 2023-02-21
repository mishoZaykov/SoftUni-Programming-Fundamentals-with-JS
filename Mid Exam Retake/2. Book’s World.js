function booksWorld(input) {
  let favoriteGenres = input.shift().split(' | ');
  let currentLine = input.shift();

  while (currentLine != 'Stop!') {
    let lineArgs = currentLine.split(' ');
    let command = lineArgs[0];
    let argument = lineArgs[1];
    let secondArgument = lineArgs[2]

    switch (command) {
      case 'Join':
        if(!favoriteGenres.includes(argument)){
          favoriteGenres.push(argument);
        }
        break;
      case 'Drop':
        let itemIndex = favoriteGenres.indexOf(argument);
        if(itemIndex > -1){
          favoriteGenres.splice(itemIndex, 1);
        }
        break;
      case 'Replace':
        let oldGenre = argument;
        let newGenre = secondArgument;

        let oldGenreIndex = favoriteGenres.indexOf(oldGenre);

        if(oldGenreIndex > -1 && !favoriteGenres.includes(newGenre)){
          favoriteGenres[oldGenreIndex] = newGenre;
        }
        break;
      case 'Prefer':
        let firstIndex = Number(argument);
        let secondIndex = Number(secondArgument);


        if(firstIndex > -1 && firstIndex < favoriteGenres.length && secondIndex > -1 && secondIndex < favoriteGenres.length){
          let temp =  favoriteGenres[firstIndex];
          favoriteGenres[firstIndex] = favoriteGenres[secondIndex];
          favoriteGenres[secondIndex] = temp;
        }
        break;
    }
    currentLine = input.shift();
  }

  console.log(favoriteGenres.join(' '));
}booksWorld((["Thriller | Young | Crime", 
"Join Political", 
"Replace Young Fairytale", 
"Prefer 6 2", 
"Stop!"]) 

)