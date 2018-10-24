import React, { Component } from 'react';
import ToDoNotesList from './ToDoNotesList/ToDoNotesList';
import ToDoButton from '../../common/components/ToDoButton/ToDoButton';

export default class ToDoDashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <ToDoNotesList />
                <div className="btn-wrapper">
                    <ToDoButton btnClass="add-note-btn" routeTo="/todoform" />
                </div>
            </React.Fragment>
        );
    }
}