import React, { Component } from 'react';
import ToDoSortNotes from '../../../common/components/ToDoSortNotes/ToDoSortNotes.jsx';
import ToDoMenu from './ToDoMenu/ToDoMenu.jsx';

const ToDoHeader = (props) => (
    <div className="note-header-container">
        <span className="header-wrapper">
            <ToDoSortNotes
                itemsPerPage={props.itemsPerPage}
                page={props.page}
                stateSetter={props.stateSetter} />
            <ToDoMenu />
        </span>
    </div>
)

export default ToDoHeader;