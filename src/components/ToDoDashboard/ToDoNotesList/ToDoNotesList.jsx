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
        const {toDoNotes, page} = this.state;

        const itemsToDisplay = 6;
        const startIndex = page * itemsToDisplay;
        const visibleToDoNotes = toDoNotes ? toDoNotes.slice(startIndex, startIndex + itemsToDisplay) : null;
        console.log(visibleToDoNotes);
        return (
            <React.Fragment>
                <h1>{page}</h1>
                <div className="note-list-container">
                    <span><button onClick={this.showPreviousPage} disabled={!page}>previous</button></span>
                    <div className="note-list-wrapper">
                        {visibleToDoNotes ? visibleToDoNotes.map((toDoNote, index) =>
                            <ToDoNotes toDoNote={toDoNote} key={index}/>) : null}
                    </div>
                    <span><button onClick={this.showNextPage}>next</button></span>
                </div>
            </React.Fragment>
        )
    }
}