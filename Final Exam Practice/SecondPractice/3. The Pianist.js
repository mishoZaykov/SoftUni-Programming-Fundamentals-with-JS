function thePianist(input) {
  let num = Number(input.shift());
  let pieces = {};
  for (let i = 0; i < num; i++) {
    let [piece, composer, key] = input.shift().split("|");

    pieces[piece] = {
      composer,
      key,
    };
  }

  while (input[0] !== "Stop") {
    let [command, piece, composer, key] = input.shift().split("|");

    switch (command) {
      case "Add":
        if (pieces[piece]) {
          console.log(`${piece} is already in the collection!`);
        } else {
          pieces[piece] = { composer, key };
          console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
        break;
      case "Remove":
        if (!pieces[piece]) {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } else {
          delete pieces[piece];
          console.log(`Successfully removed ${piece}!`);
        }
        break;
      case "ChangeKey":
        key = composer;
        if (!pieces[piece]) {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } else {
          pieces[piece].key = key;
          console.log(`Changed the key of ${piece} to ${key}!`);
        }
        break;
    }

  }
  for (const piece in pieces) {
    console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
