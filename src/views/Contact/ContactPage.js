import React, { Component } from 'react';
import ContactService from '../../service/ContactService';
import ContactList from '../../cmps/Contact/ContactList';
import ContactFilter from '../../cmps/Contact/ContactFilter';

export default class ContactPage extends Component {

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
        ContactService.getContacts(this.state.filterBy)
            .then(contacts => this.setState({ contacts }))
            .catch((err) => this.props.history.push('/'));
    }

    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts);
    }

    render() {
        return (
            <main className="container">
                <h1>CONTACTS</h1>
                <ContactFilter onFilter={this.onFilter} />
                <ContactList contacts={this.state.contacts} />
            </main>
        )
    }
}
