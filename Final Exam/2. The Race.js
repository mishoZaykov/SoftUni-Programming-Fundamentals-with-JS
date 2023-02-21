function theRace(input) {

  for (let line of input) {
    let pattern = /([#$%*&])(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>[\S]+$)/gm;
   let match = line.match(pattern);
   if(match === null){
    console.log('Nothing found!');
   }else{
    let matches = pattern.exec(line);
    let name = matches.groups['name'];
    let length = Number(matches.groups['length']);
    let code = matches.groups['code'];

    if(length === code.length){
      //let arr = code.split('');
      let result ='';
      for (let char of code) {
        let value = char.charCodeAt() + length;
        result += String.fromCharCode(value)
      }
      console.log(`Coordinates found! ${name} -> ${result}"`);
      
    }else{
      console.log('Nothing found!');
    }
   }
    
  }
  
}theRace(["%GiacomoAgostini%=7!!hbqw",
"&GeoffDuke*=6!!vjh]zi",
"JoeyDunlop=10!!lkd,rwazdr",
"Mike??Hailwood=5!![pliu",
"#SteveHislop#=16!!df%TU[Tj(h!!TT[S"])
