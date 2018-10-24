import React, {Component} from 'react';
import {Select} from 'antd';
const {Option} = Select;
export default class ToDoSortNotesPriority extends Component {
    render() {
        return(
            <React.Fragment>
                <Option value="Priority: Most Important" data-direction="desc">Priority: Most Important</Option>
                <Option value="Priority: Less Important" data-direction="asc">Priority: Less Important</Option>
            </React.Fragment>
        )
    }
}