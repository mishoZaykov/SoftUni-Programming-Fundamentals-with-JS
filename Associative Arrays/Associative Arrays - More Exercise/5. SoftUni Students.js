function softUniStudents(input) {

  let course = {};
  for (let line of input) {
    if(!line.includes('[')){
      let [courseName, capacity] = line.split(': ');
      if(!course.hasOwnProperty(courseName)){
        course[courseName] = {
          capacity: Number(capacity),
          students: []
        };
      }else {
        course[courseName].capacity += Number(capacity);
      }
    }else if(line.includes('with email')){
      line = line.split('[');
      let username = line.shift();
      line = line[0].split(']')
      let creditCount = Number(line.shift());
      let temp = line[0].split(' ');
      let email = temp[3];
      let courseName = line[0].split(' joins ')[1];
      if(course.hasOwnProperty(courseName) && course[courseName].capacity > 0){
        course[courseName].students.push({
          username: username,
          creditCount:creditCount,
          email:email,
        })
        course[courseName].capacity--;
      }
    }
  }

  let sortedByCapacity = Object.entries(course).sort((a, b) => Object.keys(b[1].students).length - Object.keys(a[1].students).length);

  for (let element of sortedByCapacity) {
    console.log(`${element[0]}: ${element[1].capacity} places left`);
    element[1].students.sort((a, b) => b.creditCount - a.creditCount).forEach(x => {console.log(`--- ${x.creditCount}: ${x.username}, ${x.email}`)}
      
    );
  }

}
softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
