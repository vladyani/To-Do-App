import React from 'react';

const ToDoRobot = () => (
    <div className="lightSpeedIn animated">
        <span className="icon-robot" style={{fontSize: "17rem"}}>
            {[...Array(37)].map((_, index) => <span className={`path${index + 1}`} key={index + 1}></span>)}
        </span>
    </div>
);

export default ToDoRobot;