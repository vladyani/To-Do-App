import React, { Component } from 'react';
import colors from './toDoForm.service';

export default class ToDoForm extends Component {
    constructor() {
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <form class="note-form" action="">
                    <input type="text" name="subject" placeholder="Subject" data-error="Enter topic, please!" required />
                    <input type="date" name="deadline" value="" placeholder="Date" data-error="Enter date, please!" required />
                    <select name="category" data-error="Select category, please!" required>
                        <option hidden disabled selected value>Category</option>

                    </select>
                    <textarea name="description" placeholder="What do you need to do?" data-error="Complete the field, please!" required></textarea>
                    <button type="submit" class="add-note-btn"></button>
                </form>
            </React.Fragment>
        );
    }
}