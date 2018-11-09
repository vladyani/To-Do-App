import React from 'react';
import {notification, Icon, Modal} from 'antd';

export const notificationOptions = [
    {
        message: 'Todo\'s completed',
        description: 'Your todo\'s status has been updated',
        iconType: 'smile',
        color: ''
    },
    {
        message: 'Todo\'s in progress',
        description: 'Your todo\'s status has been updated',
        iconType: 'robot',
        color: ''
    }
];

export const tooltipOptions = {
    editNote: 'Edit note',
    updateNoteStatus: 'Status: ',
    deleteNote: 'Delete note'
};

export const confirmationModalOptions = [
    {
        title: 'Are you sure you want to delete this To Do\'s?',
        content: 'this note still is in progress status...'
    }
];

export default {
    openNotification(message, description, iconType, color) {
        notification.open({
            message: message,
            description: description,
            icon: <Icon type={iconType} style={{color: color}}/>
        });
    },
    openConfirmationModal(noteId, deleteNote, title, content) {
        Modal.confirm({
            title: title,
            content: content,
            onOk: () => {
                deleteNote(noteId);
            },
            onCancel: () => {
            },
        });
    }

}