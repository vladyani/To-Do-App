import React, {Component} from 'react';
// TODO import {Select} from 'antd';
import options from './toDoSort.service';
import LocalStorageService from "../../service/localStorageService";
// TODO const { Option } = Select;

export default class ToDoSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedNotes: [],
            direction: "",
            typeOfSort: ""
        }
    }

    sortByDeadline = (itemsPerPage, page, key, direction) => {
        console.log('sortByDeadline',itemsPerPage, page, key, direction);
        this.setState({
            sortedNotes: LocalStorageService.sortNotes(itemsPerPage, page, key, direction)
        })
    };

    sortByPriority = (itemsPerPage, page, key, direction) => {
        console.log('sortByPriority',itemsPerPage, page, key, direction);
        this.setState({
            sortedNotes: LocalStorageService.sortNotes(itemsPerPage, page, key, direction)
        })
    };

    handleChange = (e) => {
        const {itemsPerPage, page} = this.props;
        let index = e.target.selectedIndex;
        this.setState({
            direction: e.target[index].getAttribute('data-way'),
            typeOfSort: e.target[index].getAttribute('data-type')
        }, () => {
            console.log('sortByPriority',itemsPerPage, page, this.state.direction);
            this.state.typeOfSort === "date" ?
                this.sortByDeadline(itemsPerPage, page, "deadline", this.state.direction)
                : this.sortByPriority(itemsPerPage, page, "priorityId", this.state.direction);
            this.props.stateSetter(this.state.sortedNotes);
        });
    };

    render() {
        console.log('sorter', this.state.sortedNotes);
        return (
            <React.Fragment>
                <select
                    placeholder="Sort By"
                    style={{width: "10rem"}}
                    onChange={e => this.handleChange(e)}>
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