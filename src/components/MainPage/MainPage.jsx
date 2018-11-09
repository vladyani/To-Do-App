import React, {Component} from 'react';
import ToDoButton from "../../common/components/ToDoButton/ToDoButton";
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoRobot from "./ToDoRobot/ToDoRobot";
import {Icon} from "antd";
import ToDoSidebar from "./ToDoSidebar/ToDoSidebar";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <React.Fragment>
                <ToDoSidebar collapsed={this.state.collapsed}/>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? "align-right" : "align-center"}
                    onClick={this.toggle}
                />
                <div className="main-page">
                    <ToDoCounter/>
                    <ToDoRobot/>
                    <h1 className="bounceInUp animated">Let's R2-D-DOOO!</h1>
                    <ToDoButton btnClass="start-btn" routeTo="/todoform"/>
                </div>
            </React.Fragment>
        );
    }
}