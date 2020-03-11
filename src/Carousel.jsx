import React from "react";
import cn from "classnames";
import './bootstrap.min.css'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onClickIncrement = (e) => {
    e.preventDefault();
    if (this.state.count === this.props.images.length - 1) {
      this.setState({ count: 0 });
    } else
      this.setState({ count: this.state.count + 1 });
  };

  onClickDecrement = (e) => {
    e.preventDefault();
    if (this.state.count === 0) {
      this.setState({ count: this.props.images.length - 1 });
    } else
      this.setState({ count: this.state.count - 1 });
  };

  render() {
    // const activeSlide = this.props.images.filter((image, i) => this.state.count === i);
    const isActive = (index) => this.state.count === index;

    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        {
          this.props.images.map((image, index) => (
            <div className="carousel-inner" key={index}>
              <div className={cn({ 'carousel-item': true, 'active': isActive(index), })} >
                <img alt="" className="d-block w-100" src={image} />
              </div>
            </div>
          )
          )}


        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev" onClick={this.onClickDecrement}>
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next" onClick={this.onClickIncrement}>
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}