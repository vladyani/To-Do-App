import React from 'react';

const ToDoRobot = () => (
    <div>
        <span className="icon-robot">
            {[...Array(37)].map((_, index) => <span className={`path${index + 1}`} key={index + 1}></span>)}
        </span>
    </div>
);

export default ToDoRobot;