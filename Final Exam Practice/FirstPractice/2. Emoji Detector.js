function emojiDetector(input) {
  // input
  let text = input.shift();
  let emojiCount = 0;
  let threshold = 1;
  let coolEmojis = [];
  // get all digits
  let degits = text.match(/\d/g);
  for (const digit of degits) {
    let number = Number(digit[0]);
    threshold *= digit; 
  }
   // get all emojis
  let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
  for (const emojiMatch of emojiMatches) {
    let emoji = emojiMatch[0];
    let emojiName = emojiMatch.groups.name;
    emojiCount++;

    //calculate emoji coolnes
    let emojiCoolnes = 0;

    for (let i = 0; i < emojiName.length; i++) {
      emojiCoolnes += emojiName.charCodeAt(i);
    }

    if(emojiCoolnes >= threshold){
      coolEmojis.push(emoji);
    }
  }

  // print result and  cool emojis
  console.log(`Cool threshold: ${threshold}`);
  console.log(`${emojiCount} emojis found in the text. The cool ones are: `);
  for (const emoji of coolEmojis) {
    console.log(emoji);
  }
}emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);