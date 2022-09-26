function login(input) {
  let index = 0;
  let username = input[index];
  index++;

  // username reversing
  let password = "";
  for (let i = input[0].length - 1; i >= 0; i--) {
    password += input[0][i];
  }
  let command = input[index];
  let loginCount = 0;
  while (command != password) {
    if (loginCount >= 3) {
      console.log(`User ${username} blocked!`);
      return;
    }

    console.log("Incorrect password. Try again.");
    index++;
    command = input[index];
    loginCount++;
  }

  console.log(`User ${username} logged in.`);
}
login(['sunny','rainy','cloudy','sunny','notsunny'])
