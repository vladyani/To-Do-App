import React from 'react';
import ToDoSortNotes from '../../../common/components/ToDoSortNotes/ToDoSortNotes.jsx';
import ToDoMenu from './ToDoMenu/ToDoMenu.jsx';
import {Dropdown, Button, Icon} from 'antd';


const ToDoHeader = (props) => (
    <div className="note-header-container">
        <span className="header-wrapper">
            <ToDoSortNotes
                itemsPerPage={props.itemsPerPage}
                page={props.page}
                stateSetter={props.stateSetter}/>
        </span>
        <Dropdown overlay={ToDoMenu} placement="bottomCenter">
            <i className="icon-menu-normal menu-dropdown-icon"/>
        </Dropdown>
    </div>
);

export default ToDoHeader;