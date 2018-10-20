import React, {Component} from 'react';
import ToDoCounter from "./ToDoCounter";
import ToDoRobot from "./ToDoRobot";
import ToDoButton from "./ToDoButton";

export default class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <ToDoCounter/>
                <ToDoRobot/>
                <h1>Let's R2-D-DOOO!</h1>
                <ToDoButton className="start-btn"/>
            </div>
        );
    }
}