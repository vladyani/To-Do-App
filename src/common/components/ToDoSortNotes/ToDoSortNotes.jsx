import React, {Component} from 'react';
import LocalStorageService from '../../service/localStorageService';
// TODO import {Select} from 'antd';
import options from './toDoSort.service';
// TODO const { Option } = Select;

export default class ToDoSort extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            direction: "",
            typeOfSort: "",
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    getNotes = () => {
        this.setState({
            notes: LocalStorageService.findNotes()
        })
    };

    sortByDeadline = (key) => {
        this.setState({
            toDoNotes: this.state.notes.reverse().sort((a, b) => {
                return this.state.direction === 'asc' ? new Date(a[key]) - new Date(b[key]) : new Date(b[key]) - new Date(a[key])
            }), 
        });
    };

    sortByPriority = (key) => {
        this.setState({
            toDoNotes: this.state.notes.reverse().sort((a, b) => {
                console.log(a[key]);
                return this.state.direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
            })
        })  
    }

    handleChange = (e) => {
        let index = e.target.selectedIndex;
        this.setState({
            direction: e.target[index].getAttribute('data-way'),
            typeOfSort: e.target[index].getAttribute('data-type')
        });
        (this.state.typeOfSort === "date") ? this.sortByDeadline("deadline") : this.sortByPriority("priorityId")
        this.props.updateSortedNotes(this.state.notes);
    }
        
    render() {
        console.log(this.state.notes);
        console.log(this.state.direction);
        return(
            <React.Fragment>
            <select  
                placeholder="Sort By"
                style={{width: "10rem"}}
                onChange={e=>this.handleChange(e)}>
                {options.map((option, index) => 
                <option key={index} 
                        value={option.value} 
                        data-type={option.typeOfSort} 
                        data-way={option.wayOfSort}>{option.value}</option>
                )}
            </select>
            </React.Fragment>
        )
    }
}