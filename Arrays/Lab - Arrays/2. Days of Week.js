function daysOfWeek(numbers) {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  if(numbers < 1 || numbers > 7){
    console.log('Invalid day!');
  }else{
    console.log(days[numbers -1]);
  }
}daysOfWeek(3)