import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from "react-router-dom";

const ToDoMenu = (
    <Menu>
        <Menu.Item key="1">
            <Link to="/">
                <Icon type="home"/>
                <span>Home</span>
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
);

export default ToDoMenu;