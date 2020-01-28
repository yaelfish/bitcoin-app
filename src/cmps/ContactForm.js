import React, { Component } from 'react';

export default class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    componentDidMount() {
        this.setFormDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.contact !== this.props.contact) {
            this.setFormDataForEdit();
        }
    }

    setFormDataForEdit() {
        const { contact } = this.props;
        if (contact) {
            this.setState({ 
                name: contact.name, 
                email: contact.email, 
                phone: contact.phone
            })
        }
    }

    onSave = (ev) => {
        ev.preventDefault();
        const edittedValue = {...this.state};
        this.props.onSave(edittedValue)
        this.setState({ name: '', email: '', phone: '' })
    }

    onInputChange = (ev) => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({ [fieldName]: fieldValue })
    }

    render() {
        console.log(this.state)
        return (<form>
            <label htmlFor="name">name</label>
            <input type="text" placeholder="name" name="name" onChange={this.onInputChange} value={this.state.name}/>
            <label htmlFor="email">email</label>
            <input type="email" placeholder="email" name="email" onChange={this.onInputChange} value={this.state.email} />
            <label htmlFor="phone">phone</label>
            <input type="phone" placeholder="phone" name="phone" onChange={this.onInputChange} value={this.state.phone} />
          
        <button onClick={this.onSave}>Save</button>
        </form>)
    }
}