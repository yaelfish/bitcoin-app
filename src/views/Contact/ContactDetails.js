import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactService from '../../service/ContactService';
import { observer, inject } from 'mobx-react';

@inject('contactStore')

@observer class ContactDetails extends Component {

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params._id
            !== this.props.match.params._id) {
            this.loadContact();
        }
    }

    loadContact = () => {
        const {_id} = this.props.match.params;
        this.props.contactStore.getContactById(_id)
    }

    goBack = () => {
        this.props.history.push('/contact')
    }

    onDelete = async () => {
        const { _id } = this.props.contactStore.currContact;
        await this.props.contactStore.deleteContact(_id)
            this.props.history.push('/contact')
    }


    render() {
        
        const { _id, name, email, phone } = this.props.contactStore.currContact;
        return (
            <div className="container card-contact">
            <p>{name}</p>
            <img className="contact-image" src={`https://robohash.org/${_id}`} alt={name} />
            <p>email: {email}$</p>
            <p>phone: {phone}</p>
            
            <button onClick={this.goBack}>Back</button>
            <button onClick={this.onDelete}>Delete</button>
            <Link to={`/contact/${_id}/edit`}><button>Edit</button></Link>
        </div>
        )
    }
}

export default ContactDetails;