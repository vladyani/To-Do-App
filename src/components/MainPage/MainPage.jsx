import React, {Component} from 'react';
import ToDoButton from "../../common/components/ToDoButton/ToDoButton";
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoRobot from "./ToDoRobot/ToDoRobot";

export default class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <ToDoCounter/>
                <ToDoRobot/>
                <h1>Let's R2-D-DOOO!</h1>
                <ToDoButton btnClass="start-btn" routeTo="/todoform"/>
            </div>
        );
    }
}