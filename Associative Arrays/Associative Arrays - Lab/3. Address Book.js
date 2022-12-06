function adressBook(input) {
  
  let adressBook = {};

  for (const line of input) {
    let [name, adress] = line.split(':');

    adressBook[name] = adress;
  }

  let adressBookEntries = Object.entries(adressBook);

  adressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

  for (const entry of adressBookEntries) {
    let name = entry[0];
    let adress = entry[1];

    console.log(`${name} -> ${adress}`);
  }

}adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])