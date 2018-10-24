import React, {Component} from 'react';
import {Select} from 'antd';
const {Option} = Select;
export default class ToDoSortNotesDate extends Component {
    changeDirection = e => {
        this.props.onChangeDirection(e.target.data.direction);
    }
    render() {
        return(
            <React.Fragment>
                <option value="Date: Newest First" data-direction="desc" onClick={e=>this.changeDirection(e)}> Date: Newest First </option> 
                <option value="Date: Oldest First" data-direction="asc" onClick={e=>this.changeDirection(e)}>Date: Oldest First </option> 
            </React.Fragment>
        )
    }
}