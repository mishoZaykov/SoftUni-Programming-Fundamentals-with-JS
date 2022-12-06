const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();
    
    res.render('index', {contacts});
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
  }
}