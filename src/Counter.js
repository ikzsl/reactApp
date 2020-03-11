import React from "react";

export default class Counter extends React.Component {
  static defaultProps = {
    count: 0,
  };

  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }

  onClick = () => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  render() {
    return (<button onClick={this.onClick}>
      count: {this.state.count}
    </button>);
  }
}