import React from 'react';
import {Modal, Input, Select} from 'antd';

const ToDoEditModal = props => {
    const {deadline, description, isActive, noteId, priority, subject} = props.currToDoNote;

    return (
        <Modal
            title={subject}
            visible={props.visible}
            onOk={props.handleOk}
            onCancel={props.toggleModal}>
            <p>{deadline}</p>
            <label>Description</label>
            <Input value={description}/>
        </Modal>
    )
};

export default ToDoEditModal;