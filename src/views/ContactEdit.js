import React, { Component } from 'react'
import ContactForm from '../cmps/ContactForm'
import ContactService from '../service/ContactService'

export default class ContactEdit extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params._id !== this.props.match.params._id){
            this.loadContact();
        }
    }

    loadContact = () => {
        const {_id} = this.props.match.params;
        ContactService.getContactById(_id)
        .then(contact => this.setState({ contact: contact }))
    }

    onEditContact = (edittedValue) => {
        ContactService.saveContact(this.state.contact, edittedValue)
            .then(() => { this.props.history.push(`/contact/${ this.state.contact._id }`)})
    }

    render() {
        let {contact} = this.state; 
        return <ContactForm contact={contact} onSave={this.onEditContact}></ContactForm>
    }
}
