import React, {Component} from 'react';
import LocalStorageService from '../../service/localStorageService';
import {Select} from 'antd';

import ToDoSortNotesDate from './ToDoSortNotesDate';
import ToDoSortNotesPriority from './ToDoSortNotesPriority';

const {Option} = Select;
export default class ToDoSort extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes:LocalStorageService.findNotes(),
            direction: "",
        }
    }

    sortByDates = (key) => {
        this.setState({
            notes: this.state.notes.reverse().sort((a, b) => {
                return this.state.direction[key] === 'asc' ? new Date(a[key]) - new Date(b[key]) : new Date(b[key]) - new Date(a[key])
            }),
            direction: {
                [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
            }
        });
    };

    onChangeDirection = (currDirection) => {
        this.setState({
            direction: currDirection,
        })
    }

    render() {
        console.log(this.state.notes);
        return(
            <Select name="select-by" id="select-by">
                <Option value="" disabled>Sort By</Option>
                <ToDoSortNotesPriority onChangeDirection={this.onChangeDirection}/>
                <ToDoSortNotesDate onChangeDirection={this.onChangeDirection} sortByDates = {this.sortByDates(this.state.notes.deadline)}/>
            </Select>
        )
    }
}