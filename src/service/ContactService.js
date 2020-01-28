import { contacts } from './Contacts.js';

export default {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact
}

function sort(arr) {
  return arr.sort( (a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

function getContacts (filterBy = null) {
  return new Promise((resolve, reject) => { 
    var contactsToReturn = contacts;
    if (filterBy && filterBy.term) {
      contactsToReturn = filter(filterBy.term)
    }
    resolve(sort(contactsToReturn))
  })
}

function getContactById (id) {
    return new Promise((resolve, reject) => {
      const contact = contacts.find( contact => contact._id === id)
      contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( contact => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( c => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
    }
    resolve(contact)
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => { 
    contact._id = _makeId()
    contacts.push(contact)
    resolve(contact)
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}

function filter (term) {
  term = term.toLocaleLowerCase()
  return contacts.filter( contact => {
    return contact.name.toLocaleLowerCase().includes(term) ||
           contact.phone.toLocaleLowerCase().includes(term) ||
           contact.email.toLocaleLowerCase().includes(term)
  })
}


function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}