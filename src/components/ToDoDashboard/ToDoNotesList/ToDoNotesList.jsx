import React, {Component} from 'react';
import ToDoNotes from './ToDoNotes/ToDoNotes';
import LocalStorageService from '../../../common/service/localStorageService';

export default class ToDoNotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoNotes: [],
            page: 0
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    getNotes = () => {
        this.setState({
            toDoNotes: LocalStorageService.findNotes()
        })
    };

    showNextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    };

    showPreviousPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    };

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.page}</h1>
                <div className="note-list-container">
                    <span><button onClick={this.showPreviousPage} disabled={!this.state.page}>previous</button></span>
                    <div className="note-list-wrapper">
                        {this.state.toDoNotes.map((toDoNote, index) => <ToDoNotes toDoNote={toDoNote} key={index}/>)}
                    </div>
                    <span><button onClick={this.showNextPage}>next</button></span>
                </div>
            </React.Fragment>
        )
    }

}