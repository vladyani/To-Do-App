import React, {Component} from 'react';
import ToDoSortNotes from '../../../common/components/ToDoSortNotes/ToDoSortNotes.jsx';
import ToDoMenu from './ToDoMenu/ToDoMenu.jsx';

export default class ToDoHeader extends Component {
    render() {
        return(
            <div className="noteHeader">
                <ToDoSortNotes />
                <ToDoMenu />
            </div>
        )
    }
}