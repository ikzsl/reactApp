import React from "react";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
    }

    onChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return <textarea onChange={this.onChange} value={this.state.text} />;
    }
}