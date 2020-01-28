import React, { Component } from 'react'

export default class ContactFilter extends Component {
    state = {
        filterBy: {
            term: ''
        }
    }

    onInputChange = (ev) => {
        let value = ev.target.value;
        this.setState({ filterBy: {term: value }}, this.onFilter);
    }

    onFilter = () => {
        this.props.onFilter(this.state.filterBy)
    }

    render() {
        return <div>
            <input type='text' placeholder='search' value={this.state.filterBy.term}
                onChange={this.onInputChange} name='name'/>
        </div>
    }
}