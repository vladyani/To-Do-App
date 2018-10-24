import React, {Component} from 'react';
import {Select} from 'antd';
const {Option} = Select;
export default class ToDoSortNotesPriority extends Component {
    render() {
        return(
            <React.Fragment>
                <option value="Priority: Most Important" data-direction="desc">Priority: Most Important</option>
                <option value="Priority: Less Important" data-direction="asc">Priority: Less Important</option>
            </React.Fragment>
        )
    }
}