import React, {Component} from 'react';
import {Modal, DatePicker} from 'antd';
import LocalStorageService from '../../service/localStorage.service';
import moment from 'moment';

export default class ToDoEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectToEdit: '',
            deadlineToEdit: '',
            descriptionToEdit: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currNoteId !== this.props.currNoteId) this.getNoteById(nextProps.currNoteId);
    }

    getNoteById = (noteId) => {
        const note = LocalStorageService.findNoteById(noteId);
        this.setState({
            subjectToEdit: note.subject,
            descriptionToEdit: note.description,
            deadlineToEdit: note.deadline
        });
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleDateChange = date => {
        date ? this.setState({deadlineToEdit: date._d})
            : this.setState({deadline: ''});
    };

    render() {
        const {subjectToEdit, descriptionToEdit, deadlineToEdit} = this.state;

        return (
            <Modal
                title={this.state.subjectToEdit}
                visible={this.props.visible}
                onOk={() => this.props.handleOkModal(this.props.currNoteId,
                    subjectToEdit, descriptionToEdit, deadlineToEdit)}
                onCancel={this.props.toggleModal}>
                <form className="edit-form">
                    <div className="edit-form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            name="subjectToEdit"
                            placeholder="Subject"
                            onChange={this.handleChange}
                            value={subjectToEdit}
                            required/>
                    </div>
                    <div className="edit-form-group">
                        <label>Date</label>
                        <DatePicker
                            onChange={this.handleDateChange}
                            defaultValue={moment(deadlineToEdit)}/>
                    </div>
                    <div className="edit-form-group">
                        <label>Description</label>
                        <textarea
                            name="descriptionToEdit"
                            className="form-control"
                            onChange={this.handleChange}
                            value={descriptionToEdit}
                            placeholder="What do you need to do?"
                            required>
                     </textarea>
                    </div>
                </form>
            </Modal>
        )
    }
}