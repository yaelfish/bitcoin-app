import contactService from "../service/ContactService";
import { observable, decorate, action, runInAction } from 'mobx';

class ContactStore {

    @observable contacts = [];
    @observable currContact = {};
    @observable filterBy = '';

    loadContacts = () => {
        return contactService.getContacts(this.filterBy).then((contacts) => {
            runInAction(() => {
                this.contacts = contacts
            })
        })
    }
    
    @action setFilter = (filterBy) => {
        this.filterBy = filterBy;
        this.loadContacts();
    }

    addContact = async (contact) => {
        contact = await contactService.saveContact(contact)
        runInAction(() => {
            this.contacts.push(contact)
        })
    }

    editContact = async (contact) => {
        await contactService.saveContact(contact);
        runInAction(() => {
            const index = this.contacts.findIndex(c => contact._id === c._id)
            if (index !== -1) {
                this.contacts[index] = contact
            }
        })
    }

    deleteContact = async (id) => {
        await contactService.deleteContact(id);
        runInAction(() => {
            const index = this.contacts.findIndex(contact => contact._id === id)
            if (index !== -1) {
                this.contacts.splice(index, 1)
            }
        })
    }

    getContactById = async (id) => {
        let contact = await contactService.getContactById(id)
        runInAction(() => {
           this.currContact = contact
        })
    }
}

let store = new ContactStore();
export default store