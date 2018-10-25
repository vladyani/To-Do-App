import React from 'react';
import {Modal, Input, DatePicker} from 'antd';

const ToDoEditModal = props => {
   const {deadline, description, isActive, noteId, priority, subject} = props.currToDoNote;

    return (
        <Modal
            title={subject}
            visible={props.visible}
            onOk={props.handleOk}
            onCancel={props.toggleModal}>
            <label>Description</label>
            <Input type="text"
                   className="form-control"
                   defaultValue={description}/>
        </Modal>
    )
};

export default ToDoEditModal;