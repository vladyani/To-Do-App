import React from 'react';
import ToDoNotesList from './ToDoNotesList/ToDoNotesList';
import ToDoButton from '../../common/components/ToDoButton/ToDoButton';
import ToDoHeader from './ToDoHeader/ToDoHeader';

export default class ToDoDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedNotes: [],
        }
    }



    onUpdateSortedNotes = sortedNotes => {
        this.setState({
            sortedNotes: sortedNotes,
        })
    }
    

    render() {
        return(
            <React.Fragment>
            <ToDoHeader onUpdateSortedNotes={this.onUpdateSortedNotes}/>
            <ToDoNotesList sortedNotes={this.state.sortedNotes}/>
            <div className="btn-wrapper">
                <ToDoButton btnClass="add-note-btn" routeTo="/todoform"/>
            </div>
        </React.Fragment>
        )
    }
}