function bossRush(input) {

  let num = Number(input.shift());
  
  for (let line of input) {
    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/gm;
    let match = line.match(pattern);
    if(match === null){
      console.log('Access denied!');
    }else{
      let matches = pattern.exec(line);
      let bossName = matches.groups['boss'];
      let title = matches.groups['title'];
      
      console.log(`${bossName}, The ${title}`);
      console.log(`>> Strength: ${bossName.length}`);
      console.log(`>> Armor: ${title.length}`);
    } 
  }

}bossRush((['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
)


