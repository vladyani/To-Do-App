import React, {Component} from 'react';
import colors from '../../common/service/colors.service';
import {Select} from 'antd';
import {DatePicker} from 'antd';
import LocalStorageService from '../../common/service/localStorage.service';
import {Redirect} from 'react-router-dom';

const {Option} = Select;

export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            deadline: '',
            priority: '',
            description: '',
            redirect: false
        }
    }

    handleChange = (event, value) => {
        value ? this.setState({priority: value.props.value})
            : this.setState({[event.target.name]: event.target.value});
    };

    handleDateChange = date => {
        date ? this.setState({deadline: date._d.toISOString().substr(0, 10)})
            : this.setState({deadline: ''});
    };

    setPriorityId = priority => {
        let priorityId;
        colors.forEach(color =>
            priority === color.bcgColor ? priorityId = color.priorityId : null);
        return priorityId;
    };

    addNote = event => {
        event.preventDefault();
        LocalStorageService.createNote({
            noteId: Date.now() + Math.random(),
            subject: this.state.subject,
            deadline: this.state.deadline,
            priority: this.state.priority,
            priorityId: this.setPriorityId(this.state.priority),
            description: this.state.description,
            isActive: true
        });
        this.setState({redirect: true});
    };

    render() {
        if (this.state.redirect) return <Redirect to='/tododashboard'/>;

        return (
            <div className="content-wrapper">
                <form className="note-form">
                    <div className="form-control-wrapper">
                        <input type="text" className="form-control" onChange={this.handleChange}
                               name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-control-wrapper">
                        <DatePicker onChange={this.handleDateChange}/>
                    </div>
                    <div className="form-control-wrapper">
                        <Select
                            showSearch
                            placeholder="Select priority"
                            onChange={this.handleChange}>
                            {colors.map((color, index) =>
                                <Option
                                    style={{backgroundColor: color.bcgColor}}
                                    value={color.bcgColor}
                                    key={index}>{color.label}
                                </Option>)}
                        </Select>
                    </div>
                    <div className="form-control-wrapper">
                        <textarea name="description"
                                  className="form-control"
                                  onChange={this.handleChange}
                                  placeholder="What do you need to do?"
                                  required>
                        </textarea>
                    </div>
                    <button type="submit"
                            className="add-note-btn"
                            onClick={event => this.addNote(event)}>
                    </button>
                </form>
            </div>
        );
    }
}