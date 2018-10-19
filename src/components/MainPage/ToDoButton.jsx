import React, {Component} from 'react';

export default class ToDoButton extends Component {
    render() {
        return (
            <React.Fragment>
                <button className={this.props.className}></button>
            </React.Fragment>
        );
    }
}