import React from "react";
import cn from "classnames";
import './bootstrap.min.css'


export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      primary: false,
    };
  }

  onIncrement = () => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  onChangeClass = () => {
    const primary = this.state.primary;
    this.setState({ primary: !primary });
  };

  render() {
    const buttonClass = cn({ btn: true, 'btn-primary': this.state.primary, });
    return <div>
      <button className="btn btn-default m-3 btn-primary" onClick={this.onIncrement}>count: {this.state.count}</button>
      <button className={buttonClass} onClick={this.onChangeClass}>button</button>
    </div>

  };




}