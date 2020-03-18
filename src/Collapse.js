import React from "react";
import cn from "classnames";
import './bootstrap.min.css'

export default class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opened: this.props.opened, text: this.props.text };
    }

    static defaultProps = {
        opened: false,
      };






    onClick = (e) => {
        e.preventDefault();
        const opened = this.state.opened;
        this.setState({ opened: !opened });
        document.querySelector('.collapse');
        console.log(this.state, opened);


    }


    render() {
        console.log(this.props);
        // const { opened } = this.state;
        const {opened} = this.state;
        console.log(opened);
        const showClass = cn({ collapse: true, show: opened });

        return <div >
            <p>
                <a className="btn btn-primary" href="#" onClick={this.onClick}>Link with href</a>
            </p>
            <div className={showClass}>
                <div className="card card-body">
                    {this.props.text}
                </div>
            </div>
        </div>

    }


}