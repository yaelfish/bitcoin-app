import React, { Component } from 'react';
import ContactList from '../../cmps/Contact/ContactList';
import ContactFilter from '../../cmps/Contact/ContactFilter';
import { observer, inject } from 'mobx-react';


@inject('contactStore')

@observer class ContactPage extends Component {
    state = {
        contacts: [],
        filterBy: {
            term:''
        }
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = () => {
        try {
            this.props.contactStore.loadContacts();
        }
        catch(err) {
            console.log(err);
            
        }
    }

    onFilter = (filterBy) => {
        this.props.contactStore.setFilter(filterBy)
    }

    render() {
        return (
            <main className="container">
                <h1>CONTACTS</h1>
                <ContactFilter onFilter={this.props.contactStore.setFilter} />
                <ContactList contacts={this.props.contactStore.contacts} />
            </main>
        )
    }
}
export default ContactPage;