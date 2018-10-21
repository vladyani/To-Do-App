import React, { Component } from 'react';
import colors from './toDoForm.service';
import './ToDoForm.scss';
import { Select } from 'antd';
import { DatePicker } from 'antd';

const { Option } = Select;

export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            deadline: '',
            priority: '',
            description: ''
        }
    }

    handleChange = (event, value) => {
        value ? this.setState({
            priority: value.props.value
        }) : this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDateChange = date => {
        const dateString = date._d.toISOString().substr(0, 10);
        this.setState({
            deadline: dateString
        })
    }

    addNote = event => {
        event.preventDefault();
        //TODO when local storage servise will be ready, we save note in local storage and we use redirect to route to to do dashboard component
        console.log(this.state.subject, this.state.deadline, this.state.priority, this.state.description);
    }

    render() {
        return (
            <div className="content-wrapper">
                <form className="note-form">
                    <input type="text" className="form-control" onChange={this.handleChange}
                        name="subject" placeholder="Subject" required />
                    <DatePicker onChange={this.handleDateChange} />
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select priority"
                        onChange={this.handleChange}
                    >
                        {colors.map(color => <Option value={color.className}>{color.label}</Option>)}
                    </Select>
                    <textarea name="description" className="form-control" onChange={this.handleChange}
                        placeholder="What do you need to do?" required></textarea>
                    <button type="submit" className="add-note-btn" onClick={event => this.addNote(event)}></button>
                </form>
            </div>
        );
    }
}