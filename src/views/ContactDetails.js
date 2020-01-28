import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactService from '../service/ContactService';

export default class ContactDetails extends Component {

    state = {
        contact: null
    }

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
        ContactService.getContactById(_id).then(contact => {
            this.setState({contact})
        })
    }

    goBack = () => {
        this.props.history.push('/contact')
    }

    onDelete = () => {
        ContactService.deleteContact(this.state.contact._id).then(() => {
            this.props.history.push('/contact')
        });
    }


    render() {
        if (!this.state.contact) return <div className="loading">Loading...</div>
        const { _id, name, email, phone } = this.state.contact;
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
