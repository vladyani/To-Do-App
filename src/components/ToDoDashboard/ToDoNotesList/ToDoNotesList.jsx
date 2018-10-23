import React, { Component } from 'react';
import ToDoNotes from './ToDoNotes/ToDoNotes';
import LocalStorageService from '../../../common/service/localStorageService';

export default class ToDoNotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoNotes: []
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    getNotes = () => {
        this.setState({
            toDoNotes: LocalStorageService.findNotes()
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-list-container">
                    <div className="note-list-wrapper">
                        <ToDoNotes toDoNotes={this.state.toDoNotes} />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}