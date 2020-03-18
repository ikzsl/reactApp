import React from "react";

export default class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'start' , isGoing: false};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`ddddd ${this.state.value} ${this.state.isGoing}`);
    };

    handleInputChange = (e) => {
        this.setState({isGoing: e.target.checked});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="value1">value1</option>
                        <option value="value2">value2</option>
                        <option value="value3">value3</option>
                    </select>
                </label>
                <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}