import React from 'react';

const ToDoNotes = props => {
    const {deadline, subject, description, priority} = props.toDoNote;
    return (
        <div className="note-container" style={{boxShadow: `0 0 0 1px ${priority}`}}>
            <div className="note-body">
                <span className="note-btn-wrapper">
                    <button className="btn-transparent">
                        <span className="icon-trash"></span>
                    </button>
                </span>
                <h3>{deadline}</h3>
                <h3>{subject}</h3>
                <span className="note-btn-details-wrapper">
                <button className="btn-transparent note-btn-icon"
                        style={{background: priority}}>
                    <span className="icon-edit"></span>
                </button>
                <button className="btn-transparent note-btn-icon"
                        style={{background: priority}}>
                    <span className="icon-check"></span>
                </button>
            </span>
            </div>
        </div>
    )
};

export default ToDoNotes;