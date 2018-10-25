import React from 'react';
import { Modal } from 'antd';

const ToDoModal = props => (
    <Modal
        title={props.subject}
        visible={props.visible}
        onOk={props.handleOk}
        onCancel={props.toggleModal}>
        <p>Description: </p>
        <p>{props.description}</p>
    </Modal>
);

export default ToDoModal;