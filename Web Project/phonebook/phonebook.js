const phonebook = [
	{
		name: 'Pesho',
		number: '123456789'
	},
	{
		name: 'Gosho',
		number: '123456789'
	}
];

/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
function getContacts(){
	return phonebook.slice();
}

module.exports = {
	getContacts,
}