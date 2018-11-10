import React, {Component} from 'react';
import ToDoNotes from './ToDoNotes/ToDoNotes';
import LocalStorageService from '../../../common/service/localStorage.service';
import {Alert} from 'antd';

export default class ToDoNotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currNoteId: 0
        }
    }

    toggleModal = (currNoteId) => {
        const {visible} = this.state;

        // !visible ? this.setState({
        //     visible: !visible,
        //     currNoteId: currNoteId,
        // }) : this.setState({
        //     visible: !visible,
        // })

        this.setState({
            visible: !visible,
            currNoteId: currNoteId,
        })
    };

    editNote = (noteId, subjectToEdit, descriptionToEdit, deadlineToEdit) => {
        const currNote = LocalStorageService.findNoteById(noteId);
        const noteToEdit = {
            noteId: noteId,
            subject: subjectToEdit,
            deadline: deadlineToEdit,
            priority: currNote.priority,
            priorityId: currNote.priorityId,
            description: descriptionToEdit,
            isActive: currNote.isActive
        };
        LocalStorageService.updateNote(noteId, noteToEdit);
        this.props.getNotes(this.props.itemsPerPage, this.props.page);
    };

    handleOkModal = (noteId, subjectToEdit, descriptionToEdit, deadlineToEdit) => {
        this.setState({
            visible: false,
        });
        this.editNote(noteId, subjectToEdit, descriptionToEdit, deadlineToEdit);
    };

    render() {
        const {
            toDoNotes, page, showNextPage, showPreviousPage,
            confirmDeleteNote, completedOrInProgressNote
        } = this.props;

        return (
            <React.Fragment>
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
                                       handleOkModal={this.handleOkModal}
                                       toggleModal={() => this.toggleModal(toDoNote.noteId)}
                                       currNoteId={this.state.currNoteId}
                                       confirmDeleteNote={confirmDeleteNote}
                                       completedOrInProgressNote={completedOrInProgressNote}
                                       key={index}/>) : null}
                        {toDoNotes ?
                            page === 0 ?
                                !toDoNotes.length ? <span>Seems that you have no to-doo things!</span> : null : null
                            : <span>Seems that you have no to-doo things!</span>}
                    </div>
                    <span>
                        <button className={"btn-transparent"}
                                onClick={showNextPage}>
                            <span className="icon-right-arrow todo-paginate-btn"></span>
                        </button>
                    </span>
                </div>
                <div className="page-number">
                    <small>Page number:</small>
                    <em>{page + 1}</em></div>
            </React.Fragment>
        )
    }
}