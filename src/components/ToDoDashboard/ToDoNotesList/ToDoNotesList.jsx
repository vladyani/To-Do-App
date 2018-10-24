import React, {Component} from 'react';
import ToDoNotes from './ToDoNotes/ToDoNotes';
import LocalStorageService from '../../../common/service/localStorageService';
import {notification, Icon} from 'antd';

export default class ToDoNotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoNotes: [],
            page: 0
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    getNotes = () => {
        this.setState({
            toDoNotes: LocalStorageService.findNotes()
        })
    };

    showNextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    };

    // openNotification = () => {
    //     notification.open({
    //         message: 'Notification Title',
    //         description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //         icon: <Icon type="smile" style={{color: '#108ee9'}}/>
    //     });
    // };

    showPreviousPage = () => {
        this.setState({
            page: this.state.page - 1
        });

        // if(this.state.page) this.openNotification();
    };

    render() {
        const {toDoNotes, page} = this.state;

        const itemsToDisplay = 6;
        const startIndex = page * itemsToDisplay;
        const visibleToDoNotes = toDoNotes ? toDoNotes.slice(startIndex, startIndex + itemsToDisplay) : null;
        console.log(visibleToDoNotes);
        return (
            <React.Fragment>
                <h1>{page}</h1>
                <div className="note-list-container">
                    <span>
                        <button className={"btn-transparent"}
                                onClick={this.showPreviousPage} disabled={!page}>
                            <span className={"icon-left-arrow"}
                                  style={{fontSize: "4rem", cursor: "pointer"}}></span>
                        </button>
                    </span>
                    <div className="note-list-wrapper">
                        {visibleToDoNotes ? visibleToDoNotes.map((toDoNote, index) =>
                            <ToDoNotes toDoNote={toDoNote} key={index}/>) : null}
                    </div>
                    <span>
                        <button className={"btn-transparent"}
                                onClick={this.showNextPage}>
                             <span className={"icon-right-arrow"}
                                   style={{fontSize: "4rem", cursor: "pointer"}}></span>
                         </button>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}