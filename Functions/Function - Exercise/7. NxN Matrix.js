function matrix(number) {
  
  let arr = [];
  
  let rowGenerator = () =>{
    let singleRow = '';
    for(let k = 1; k <= number; k++){
      singleRow += `${number} `
    }
    return singleRow
  };

  for(let i = 1;i <= number; i++){
   
    arr.push(rowGenerator());
  }
  console.log(arr.join('\n'));
}matrix(3)