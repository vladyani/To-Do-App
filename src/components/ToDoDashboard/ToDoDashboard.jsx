import React from 'react';
import ToDoNotesList from './ToDoNotesList/ToDoNotesList';
import ToDoButton from '../../common/components/ToDoButton/ToDoButton';
import ToDoHeader from './ToDoHeader/ToDoHeader';

const ToDoDashboard = () => (
    <React.Fragment>
        <ToDoHeader />
        <ToDoNotesList/>
        <div className="btn-wrapper">
            <ToDoButton btnClass="add-note-btn" routeTo="/todoform"/>
        </div>
    </React.Fragment>
);

export default ToDoDashboard;
