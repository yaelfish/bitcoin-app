import React, { Component } from 'react'
import ContactForm from '../cmps/ContactForm'
import ContactService from '../service/ContactService'

export default class ContactAdd extends Component {

    onAddContact = (name, email, phone) => {
        ContactService.saveContact(name, email, phone)
            .then((addContact) => this.props.history.push(`/contact/${addContact._id}`))
    } 

    render() {
        return <ContactForm {...this.props} onSave={this.onAddContact}></ContactForm>
    }
}
