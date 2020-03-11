import React from "react";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }


  onClick = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <a href="#" onClick={this.onClick}>
      click {this.state.count}
    </a>
  }
}
