function lastNumberSequance(length, k) {
  let sequance = [1];

  for(let i = 1; i < length; i++){
    let index = Math.max(sequance.length - k, 0);

    let lastElements = sequance.slice(index);
    let sum = 0
    for(el of lastElements){
      sum += el;
    }

    sequance.push(sum);
  }
  console.log(sequance.join(' '));
}lastNumberSequance(6, 3)