import React from 'react';
import {Link} from 'react-router-dom';

const ToDoButton = (props) => {
    return (
        <Link to={props.routeTo}>
            <button className={props.btnClass}>{props.btnLabel}</button>
        </Link>
    )
};

export default ToDoButton;