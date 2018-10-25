import React, {Component} from 'react';
import LocalStorageService from '../../service/localStorageService';
import {Select} from 'antd';



const { Option } = Select;

export default class ToDoSort extends Component {
    constructor(props){
        super(props);
        this.state = {
            toDoNotes: LocalStorageService.findNotes(),
            direction: "",
        }
    }


    sortByDates = (key) => {
        this.setState({
            toDoNotes: this.state.notes.reverse().sort((a, b) => {
                return this.state.direction[key] === 'asc' ? new Date(a[key]) - new Date(b[key]) : new Date(b[key]) - new Date(a[key])
            }), 
        });
    };


    handleChange = e => {

    }

    render() {
        console.log(this.state.notes);
        return(
            <React.Fragment>
            <Select  
                placeholder="Sort By"
                style={{width: "10rem"}}
                onChange={e=>this.handleChange(e)}
            >
                <Option value="Newest to Oldest" data-type="date" data-sortWay="desc">Newest to Oldest</Option>
                <Option value="Oldest to Newest" data-type="date" data-sortWay="asc" >Oldest to Newest</Option>
                <Option value="The most important" data-type="priority" data-sortWay="asc">The most important</Option>
                <Option value="The least important" data-type="priority" data-sortWay="desc">The least important</Option>
            </Select>
            </React.Fragment>

        )
    }
}