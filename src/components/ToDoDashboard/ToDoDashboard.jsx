import React from 'react';
import ToDoNotesList from './ToDoNotesList/ToDoNotesList';
import ToDoButton from '../../common/components/ToDoButton/ToDoButton';

const ToDoDashboard = () => (
    <React.Fragment>
        <ToDoNotesList/>
        <div className="btn-wrapper">
            <ToDoButton btnClass="add-note-btn" routeTo="/todoform"/>
        </div>
    </React.Fragment>
);

export default ToDoDashboard;