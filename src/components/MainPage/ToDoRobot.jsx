import React, {Component} from 'react';
import robot from '../../assets/images/roboto.png'

export default class ToDoRobot extends Component {
    render() {
        return (
            <div className = "robot">
                <img alt="Logo R2-D-DOO" src={robot} />
            </div>
        );
    }
}