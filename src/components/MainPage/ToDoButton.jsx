import React, { Component } from 'react';

const ToDoButton = (props) => {
    return (
        <React.Fragment>
            <button className={props.btnClass}></button>
        </React.Fragment>
    )
}

export default ToDoButton;