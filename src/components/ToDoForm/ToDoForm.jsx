import React, {Component} from 'react';
import colors from '../../common/service/colors.service';
import {DatePicker, Select, Tooltip} from 'antd';
import LocalStorageService from '../../common/service/localStorage.service';
import {Link, Redirect} from 'react-router-dom';

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
        date ? this.setState({deadline: date._d})
            : this.setState({deadline: ''});
        return !this.state.deadline ? this.setState({showErrorD: false}) : this.setState({showErrorD: true})
    };

    setPriorityId = priority => {
        let priorityId;
        colors.forEach(color =>
            priority === color.bcgColor ? priorityId = color.priorityId : null);
        return priorityId;
    };

    addNote = event => {
        event.preventDefault();
        if (!(this.state.priority && this.state.deadline)) {
            if (!this.state.priority) this.setState({showErrorP: true});
            if (!this.state.deadline) this.setState({showErrorD: true});
            return;
        }

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
                <div className="form-home-route">
                    <Tooltip placement={'right'}
                             title={'Go to home'}>
                        <Link to="/" className="text-brand number-length">
                            <span className="icon-left-arrow"></span>
                        </Link>
                    </Tooltip>
                </div>
                <div className="form-dashboard-route">
                    <Tooltip placement={'left'}
                             title={'Go to dashboard'}>
                        <Link to="/tododashboard" className="text-brand number-length">
                            <span className="icon-right-arrow"></span>
                        </Link>
                    </Tooltip>
                </div>
                <form className="note-form slideInLeft animated">
                    <div className="form-control-wrapper">
                        <input type="text" className="form-control" onChange={this.handleChange}
                               name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-control-wrapper">
                        <DatePicker onChange={this.handleDateChange}/>
                    </div>
                    <div className="error-box">
                        {this.state.showErrorD ?
                            <output className="text-danger">
                                <span className="icon-error icon-error-padding"></span>Date is required
                            </output> : null}
                    </div>
                    <div className="form-control-wrapper">
                        <Select
                            showSearch={false}
                            placeholder="Select priority"
                            onSelect={() => !this.state.priority ? this.setState({showErrorP: false}) : null}
                            onChange={this.handleChange}>
                            {colors.map((color, index) =>
                                <Option
                                    style={{backgroundColor: color.bcgColor}}
                                    value={color.bcgColor}
                                    key={index}>{color.label}
                                </Option>)}
                        </Select>
                    </div>
                    <div className="error-box">
                        {this.state.showErrorP ?
                            <output className="text-danger">
                                <span className="icon-error icon-error-padding"></span>Priority is required
                            </output> : null}
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
                            className={!(this.state.deadline && this.state.priority) ?
                                'button-danger add-note-btn' : 'add-note-btn'}
                            onClick={event => this.addNote(event)}>
                    </button>
                </form>
            </div>
        );
    }
}