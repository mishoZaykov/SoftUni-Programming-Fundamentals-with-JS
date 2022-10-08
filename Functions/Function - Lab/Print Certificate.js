function printCertificate(grade, names) {
  // Print Header
  // Print Full Name
  // Print formatted Name
  formatGrade(grade)
}
function printHeader(){
  console.log();
  console.log();
  console.log();
}


function formatGrade(grade){
  let gradeWord = '';
  if(grade < 3){
    gradeWord = 'Fail';
    grade = 2;
  }else if (grade < 3.5){
    gradeWord = 'Poor';
  }else if ( grade < 4.5){
    gradeWord = 'Good';
  }else if (grade < 5.5){
    gradeWord = 'Very good';
  }else {
    gradeWord = 'Excellent';
  }
  if(gradeWord == 'Fail'){
    console.log('Fail (2)');
  }else{
    console.log(`${gradeWord} (${grade.toFixed(2)})`);
  }
}
printCertificate(5.25, ['Peter', 'Carter'])