function schoolGrades(input) {
  
  let result = {};

  for (const line of input) {
    let [students, ...grades] = line.split(' ');
    grades = grades.map(Number);
    if(!result.hasOwnProperty(students)){
      result[students] = [];
    }

    let existing = result[students];
    grades.map(x => existing.push(x));
  }

  let sorted = Object.entries(result);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, grades] of sorted) {
    let average = 0;
    grades.map(x => average += x);
    average /= grades.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }

}schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)