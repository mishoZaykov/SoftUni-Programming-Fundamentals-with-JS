function deserializeString(input) {
  
  let result = [];

  while(input[0] !== 'end'){
    let [letter, indexes] = input.shift().split(':');
    indexes = indexes.split('/');

    indexes.forEach(index => { index = Number(index);
      for (let i = 0; i <= index; i++) {
        if(index === i){
          result.splice(index, 1, letter);
        }else{
          result.push('*');
        }
      }
      
    });
  }

  result = result.filter(el => el !== '*')
  console.log(result.join(``));
}deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end']
)