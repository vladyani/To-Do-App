import React, {Component} from 'react';
import ToDoNotes from './ToDoNotes/ToDoNotes';

export default class ToDoNotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currToDoNote: {}
        }
    }

    toggleModal = (currToDoNote) => {
        const {visible} = this.state;

        !visible ? this.setState({
            visible: !visible,
            currToDoNote: currToDoNote,
        }) : this.setState({
            visible: !visible,
        })
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {toDoNotes, page, showNextPage, showPreviousPage, confirmDeleteNote} = this.props;

        return (
            <React.Fragment>
                <h1>{page}</h1>
                <div className="note-list-container">
                    <span>
                        <button className={"btn-transparent"}
                                onClick={showPreviousPage} disabled={!page}>
                            <span className="icon-left-arrow todo-paginate-btn"></span>
                        </button>
                    </span>
                    <div className="note-list-wrapper">
                        {toDoNotes ? toDoNotes.map((toDoNote, index) =>
                            <ToDoNotes toDoNote={toDoNote}
                                       visible={this.state.visible}
                                       handleOk={this.handleOk}
                                       toggleModal={() => this.toggleModal(toDoNote)}
                                       currToDoNote={this.state.currToDoNote}
                                       confirmDeleteNote={confirmDeleteNote}
                                       key={index}/>) : null}
                    </div>
                    <span>
                        <button className={"btn-transparent"}
                                onClick={showNextPage}>
                            <span className="icon-right-arrow todo-paginate-btn"></span>
                        </button>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}