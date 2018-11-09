import React, {Component} from 'react';
import ToDoButton from "../../common/components/ToDoButton/ToDoButton";
import ToDoCounter from "./ToDoCounter/ToDoCounter";
import ToDoRobot from "./ToDoRobot/ToDoRobot";
import {Icon, Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const {Sider} = Layout;

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
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={!this.state.collapsed}
                    collapsedWidth={0}
                >
                    <div className="logo">Imagine Heroes</div>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Link to="/tododashboard">
                                <Icon type="laptop"/>
                                <span>ToDo Dashboard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/todoform">
                                <Icon type="form"/>
                                <span>ToDo Form</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="todohistory">
                                <Icon type="file-text"/>
                                <span>ToDo History</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="todoabout">
                                <Icon type="rocket"/>
                                <span>About Us</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
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