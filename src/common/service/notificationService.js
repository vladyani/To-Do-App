import React from 'react';
import {notification, Icon} from 'antd';

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
  updateNoteStatus: 'Update status to '
};

export default {
    openNotification(message, description, iconType, color) {
        notification.open({
            message: message,
            description: description,
            icon: <Icon type={iconType} style={{color: color}}/>
        });
    }
}