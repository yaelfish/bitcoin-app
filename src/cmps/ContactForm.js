import React, { Component } from 'react';

export default class ToyForm extends Component {
    state = {
        name: '',
        price: 0,
        type: '',
        inStock: 'false'
    }

    componentDidMount() {
        this.setFormDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.toy !== this.props.toy) {
            this.setFormDataForEdit();
        }
    }

    setFormDataForEdit() {
        const { toy } = this.props;
        if (toy) {
            this.setState({ 
                name: toy.name, 
                price: toy.price, 
                type: toy.type, 
                inStock: toy.inStock 
            })
        }
    }

    onSave = (ev) => {
        ev.preventDefault();
        // let price = +this.state.price
        // this.setState({price: price});
        const edittedValue = {...this.state};
        console.log('editted values:',edittedValue);
        
        this.props.onSave(edittedValue)
        this.setState({ name: '', price: 0, type: '', inStock: false })
    }

    onInputChange = (ev) => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({ [fieldName]: fieldValue })
    }

    render() {
        console.log(this.state)
        return (<form>
            <input type="text" placeholder="name" name="name" onChange={this.onInputChange} value={this.state.name}/>
            <input type="number" placeholder="price" name="price" onChange={this.onInputChange} value={this.state.price} />
            {/* <input type="range" id="priceInputName" name="priceInputId" min="1" max="1000000" onInput={priceOutputId.value = priceInputId.value}/>
            <output name="priceOutputName" id="priceOutputId"></output> */}
            <label htmlFor="price">Price</label>
            <select name='type' value={this.state.type} onChange={this.onInputChange}>
                <option value='Adult'>Adult</option>
                <option value='Educational'>Educational</option>
                <option value='Funny'>Funny</option>
            </select>
            <select name="inStock" value={this.state.inStock} onChange={this.onInputChange}>
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
            </select>
        <button onClick={this.onSave}>Save</button>
        </form>)
    }
}