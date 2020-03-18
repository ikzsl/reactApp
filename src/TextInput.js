import React from "react";

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`yyyyyyyyyyyy: ${this.state.text}`);
    }

    handleChange = (e) => {this.setState({ text: e.target.value.toUpperCase()})};

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} />
            <input type='submit' value='Submit' />
        </form>;
    }
}