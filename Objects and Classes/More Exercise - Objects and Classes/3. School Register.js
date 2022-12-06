function schoolRegister(list) {

  let register = {};
  for (const line of list) {
    let tokens = line.split(' ');
    let studentName = tokens[2].slice(0, tokens[2].length - 1);
    let grade = Number(tokens[4].slice(0, tokens[4].length -1));
    let averageScore = Number(tokens[tokens.length - 1]);

    if(averageScore >= 3){
      if(!register.hasOwnProperty(grade)){
        register[grade] ={
          name: [studentName],
          average: [averageScore],
        }
      }else{
        register[grade].name.push(studentName);
        register[grade].average.push(averageScore);
      }
    }
  }

  for (const grade in register) {
    let student = register[grade];
    console.log(`${Number(grade) + 1} Grade`);
    console.log(`List of students: ${student.name.join(', ')}`);
    let averageNote = student.average.reduce((a,b) => a + b) / student.average.length;
    console.log(`Average annual score from last year: ${averageNote.toFixed(2)}`);
    console.log('');
  }

}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
