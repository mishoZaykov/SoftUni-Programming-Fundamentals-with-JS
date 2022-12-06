function passwordReset(input) {
  
  let password = input.shift();
  let currentLine = input.shift();

  while (currentLine !== 'Done') {
    let tokens = currentLine.split(' ');
    let command = tokens[0];
    switch (command) {

      // Взимам само буквите на нечетен индех и ги конкатенира
      case 'TakeOdd':
        let newPassword = ''
        for(let i = 0; i < password.length; i++){
          if(i % 2 !== 0){
            newPassword += password[i]
          }
        }
        password = newPassword;
        console.log(password);
        break;

      //  Взима събстринга с дадената дължина и започва от дадения индекс и изтрива първото съвпадение
      case 'Cut':
        let index = Number(tokens[1]);
        let length = Number(tokens[2]);

        let substring = password.substring(index, index + length);
        password = password.replace(substring, '');
        console.log(password);
        break;

      // Замества дадения събстринг със заместителя навсякъде
      case 'Substitute':
        let charSubstring = tokens[1];
        let substitute = tokens[2];
        if(password.includes(charSubstring)){
          while(password.includes(charSubstring)){
            password = password.replace(charSubstring, substitute)
          }
          console.log(password);
        }else{
          console.log('Nothing to replace!');
        }
        break;
    }

    currentLine = input.shift();
  }
  console.log(`Your password is: ${password}`);
}passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
])