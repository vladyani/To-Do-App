import React, {Component} from 'react';
import {Modal, DatePicker} from 'antd';
import LocalStorageService from '../../service/localStorage.service';

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
        date ? this.setState({deadline: date._d.toISOString().substr(0, 10)})
            : this.setState({deadline: ''});
    };

    render() {
        const {subjectToEdit, descriptionToEdit, deadlineToEdit} = this.state;

        return (
            <Modal
                title={this.state.subjectToEdit}
                visible={this.props.visible}
                onOk={() => this.props.handleOkModal(this.props.currNoteId,
                    subjectToEdit, descriptionToEdit)}
                onCancel={this.props.toggleModal}>
                <form className="edit-form">
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="subjectToEdit"
                            placeholder="Subject"
                            onChange={this.handleChange}
                            value={subjectToEdit}
                            required/>
                    </div>
                    <div>
                        <DatePicker
                            onChange={this.handleDateChange}/>
                    </div>
                    <div>
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