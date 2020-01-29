import React, { Component } from 'react'

export default class ContactFilter extends Component {

    onInputChange = (ev) => {
        let value = ev.target.value;
        this.props.onFilter({ term: value })
    }

    render() {
        return <div>
            <input type='text' placeholder='search'
                onChange={this.onInputChange} name='name'/>
        </div>
    }
}