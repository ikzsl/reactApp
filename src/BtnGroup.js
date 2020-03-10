import React from "react";
import cn from "classnames";
import './bootstrap.min.css'


export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLeft: false,
      activeRight: false,
    };
  }


  onChangeLeftClass = () => {
    const { activeLeft } = this.state;
    if (activeLeft) {
      return;
    }

    this.setState({ activeLeft: true, activeRight: false, });
  };

  onChangeRightClass = () => {
    const { activeRight } = this.state;
    if (activeRight) {
      return;
    }

    this.setState({ activeLeft: false, activeRight: true, });
  };

  render() {
    const buttonClassLeft = cn({ btn: true, 'btn-secondary': true, left: true, 'active': this.state.activeLeft, });
    const buttonClassRight = cn({ btn: true, 'btn-secondary': true, right: true, 'active': this.state.activeRight, });
    return <div className="btn-group" role="group">
      <button type="button" className={buttonClassLeft} onClick={this.onChangeLeftClass}>Left</button>
      <button type="button" className={buttonClassRight} onClick={this.onChangeRightClass}>Right</button>
    </div>
  }
}