function bonusScoringSystem(array) {

  let numberOfStudents = Number(array.shift());
  let numberOfLectures = Number(array.shift());
  let additionalBonus = Number(array.shift());
  let maxBonus = 0;
  let mostAttendance = 0;

  for(let index = 0; index < numberOfStudents; index++){
    let studentAttendance = array[index];
    let totalBonus = studentAttendance / numberOfLectures * (5 + additionalBonus);
    if(totalBonus > maxBonus){
      maxBonus = totalBonus;
      mostAttendance = studentAttendance
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${mostAttendance} lectures.`);
}bonusScoringSystem([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
]
)