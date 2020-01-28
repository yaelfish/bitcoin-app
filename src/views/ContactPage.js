import React, { Component } from 'react';
import ContactService from '../service/ContactService';
import ContactList from '../cmps/ContactList';
import ContactFilter from '../cmps/ContactFilter';

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
            <div>
                <h1>CONTACTS</h1>
                <ContactFilter onFilter={this.onFilter} />
                <ContactList contacts={this.state.contacts} />
            </div>
        )
    }
}
