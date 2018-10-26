import React, {Component} from 'react';
import ToDoSortNotes from '../../../common/components/ToDoSortNotes/ToDoSortNotes.jsx';
import ToDoMenu from './ToDoMenu/ToDoMenu.jsx';

const ToDoHeader = (props) => {

    // const updateSortedNotes = (updatedNotes) => {
    //     this.props.onUpdateSortedNotes(updatedNotes);
    // };

    return (
        <div className="note-header-container">
                <span className="header-wrapper">
                    <ToDoSortNotes toDoNotes={props.toDoNotes}
                                   itemsPerPage={props.itemsPerPage}
                                   page={props.page}
                                   stateSetter={props.stateSetter}/>
                    <ToDoMenu/>
                </span>
        </div>
    )
}

export default ToDoHeader;