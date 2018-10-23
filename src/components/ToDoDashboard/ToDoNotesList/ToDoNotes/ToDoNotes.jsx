import React, { Component } from 'react';

const ToDoNotes = props => {
    return (
        <React.Fragment>
            {props.toDoNotes ?
                props.toDoNotes.map((note, index) => {
                    return (
                        <div className="note-container" key={index}>
                            <div className="note-body">
                                <span className="note-btn-wrapper">
                                    <button className="btn-transparent">
                                        <span className="icon-trash"></span>
                                    </button>
                                </span>
                                <h3>{note.deadline}</h3>
                                <h3>{note.subject}</h3>
                                <span className="note-btn-details-wrapper">
                                    <button className="btn-transparent note-btn-icon"
                                        style={{ background: "#fc4d59" }}>
                                        <span className="icon-edit"></span>
                                    </button>
                                    <button className="btn-transparent note-btn-icon"
                                        style={{ background: "#fc4d59" }}>
                                        <span className="icon-check"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    )
                }) : null}
        </React.Fragment>
    )
}

export default ToDoNotes;