import {Icon, Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";
const {Sider} = Layout;

const ToDoSidebar = (props) => (
    <React.Fragment>
        <Sider
            trigger={null}
            collapsible
            collapsed={!props.collapsed}
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
                    <Link to="/todohistory">
                        <Icon type="file-text"/>
                        <span>ToDo History</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/todoabout">
                        <Icon type="rocket"/>
                        <span>About Us</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    </React.Fragment>
);

export default ToDoSidebar;