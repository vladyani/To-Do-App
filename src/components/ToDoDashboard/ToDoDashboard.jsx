import React from 'react';
import ToDoNotesList from './ToDoNotesList/ToDoNotesList';
import ToDoButton from '../../common/components/ToDoButton/ToDoButton';
import ToDoHeader from './ToDoHeader/ToDoHeader';

export default class ToDoDashboard extends React.Component {

    render() {
        return(
            <React.Fragment>
            <ToDoHeader onUpdateSortedNotes={this.onUpdateSortedNotes}/>
            <ToDoNotesList onUpdateSortedNotes={this.onUpdateSortedNotes}/>
            <div className="btn-wrapper">
                <ToDoButton btnClass="add-note-btn" routeTo="/todoform"/>
            </div>
        </React.Fragment>
        )
    }
}