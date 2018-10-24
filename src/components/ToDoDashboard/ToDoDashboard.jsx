import React, {Component} from 'react';
import ToDoHeader from './ToDoHeader/ToDoHeader.jsx';

export default class ToDoDashboard extends Component {
    render() {
        return (
            <div className="notesContainer">
                <ToDoHeader />
            </div>
        );
    }
}