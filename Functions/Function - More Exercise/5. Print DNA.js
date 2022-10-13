function printDNA(num) {
  let array = 'ATCGTTAGGG'.split('');

  for(let i = 1; i <= num; i++){
    let a = array.splice(0,1);
    let b = array.splice(0,1);

    if(i % 4 === 1){
      console.log(`**${a}${b}**`);
    }else if (i % 4 === 2){
      console.log(`*${a}--${b}*`);
    }else if (i % 4 === 3){
      console.log(`${a}----${b}`);
    }else if (i % 4 === 0){
      console.log(`*${a}--${b}*`);
    }
    array.push(a);
    array.push(b);

  }
}printDNA(10)