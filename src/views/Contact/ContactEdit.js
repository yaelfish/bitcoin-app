import React, { Component } from 'react';
import ContactForm from '../../cmps/Contact/ContactForm';
import ContactService from '../../service/ContactService';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('contactStore')

@observer class ContactEdit extends Component {
    
    @observable contact = null
    @observable loading = true
    
    // state = {
    //     contact: null
    // }

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
        this.props.contactStore.getContactById(_id);
    }

    onEditContact = async (edittedValue) => {
        await this.props.contactStore.editContact(edittedValue)
        this.props.history.push(`/contact/${ this.props.contactStore.currContact._id }`)
    }

    render() {
        let {currContact} = this.props.contactStore; 
        return <ContactForm contact={currContact} onSave={this.onEditContact}></ContactForm>
    }
}
export default ContactEdit;