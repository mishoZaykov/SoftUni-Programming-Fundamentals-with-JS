function mirrorWords(input) {
  let text = input[0];
  let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/gm;

  // намираме съвпаденията
  let match = pattern.exec(text);
  let count = 0;
  let result = [];

  // правим цикъл за всикчи съвпадения
  while (match !== null) {
    count++;

    // обръшаме стреинга 
    let word1 = match[2];
    let word2 = match[3];
    let reversed = word2.split("").reverse().join("");

    if (word1 === reversed) {
      result.push(`${word1} <=> ${word2}`);
    }
    match = pattern.exec(text);
  }
  if (count == 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${count} word pairs found!`);
  }

  if (result.length == 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
