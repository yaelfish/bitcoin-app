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

    // componentDidUpdate(prevProps) {
    //     if(prevProps.match.params._id !== this.props.match.params._id){
    //         this.loadContact();
    //     }
    // }

    loadContact = () => {
        const {_id} = this.props.match.params;
        ContactService.getContactById(_id)
        .then(toy => this.setState({ toy: toy }))
    }

    onEditToy = (edittedValue) => {
        // let {toy} = this.state;
        // let { name, price, type, inStock } = this.props;
        ContactService.editToy(this.state.toy, edittedValue)
            .then(() => { this.props.history.push(`/toy/${ this.state.toy._id }`)})
    }

    render() {
        let {toy} = this.state; 
        return <ContactForm toy={toy} onSave={this.onEditToy}></ContactForm>
    }
}
