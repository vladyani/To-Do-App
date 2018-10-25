import React from 'react';
import ToDoModal from '../../../../common/components/ToDoModal/ToDoModal';

const ToDoNotes = props => {
    const { deadline, subject, description, priority, noteId } = props.toDoNote;

    return (
        <React.Fragment>
            <ToDoModal
                subject={subject}
                visible={props.visible}
                handleOk={props.handleOk}
                toggleModal={props.toggleModal}
                description={description}>
            </ToDoModal>
            <div className="note-container" style={{ boxShadow: `0 0 0 1px ${priority}` }}>
                <div className="note-body">
                    <span className="note-btn-wrapper">
                        <button className="btn-transparent" onClick={() => props.deleteNote(noteId)}>
                            <span className="icon-trash"></span>
                        </button>
                    </span>
                    <h3>{deadline}</h3>
                    <h3>{subject}</h3>
                    <span className="note-btn-details-wrapper">
                        <button className="btn-transparent note-btn-icon"
                            onClick={props.toggleModal}
                            style={{ background: priority }}>
                            <span className="icon-edit"></span>
                        </button>
                        <button className="btn-transparent note-btn-icon"
                            style={{ background: priority }}>
                            <span className="icon-check"></span>
                        </button>
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ToDoNotes;