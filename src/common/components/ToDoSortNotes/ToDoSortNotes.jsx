import React, { Component } from 'react';
// TODO import {Select} from 'antd';
import options from './toDoSort.service';
import LocalStorageService from "../../service/localStorageService";
// TODO const { Option } = Select;

const ToDoSort = props => {

    const sortByDeadline = (itemsPerPage, page, key, direction) =>
        LocalStorageService.sortNotes(itemsPerPage, page, key, direction);

    const sortByNumbers = (itemsPerPage, page, key, direction) =>
        LocalStorageService.sortNotes(itemsPerPage, page, key, direction);

    const handleChange = event => {
        let typeOfSort, direction, index;
        const { itemsPerPage, page, stateSetter } = props;

        index = event.target.selectedIndex;
        direction = event.target[index].getAttribute('data-way');
        typeOfSort = event.target[index].getAttribute('data-type');

        if (typeOfSort === "date") {
            stateSetter(sortByDeadline(itemsPerPage, page, "deadline", direction))
        } else if (typeOfSort === "priority") {
            stateSetter(sortByNumbers(itemsPerPage, page, "priorityId", direction))
        }
    };

    return (
        <React.Fragment>
            <select
                placeholder="Sort By"
                style={{ width: "10rem" }}
                onChange={event => handleChange(event)}>
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

export default ToDoSort;