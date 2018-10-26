import React, { Component } from 'react';
import ToDoNotes from './ToDoNotes/ToDoNotes';
import LocalStorageService from '../../../common/service/localStorageService';
import { notification, Icon, Modal } from 'antd';

export default class ToDoNotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoNotes: [],
            page: 0,
            itemsPerPage: 6,
            visible: false,
            currToDoNote: {}
        }
    }

    componentDidMount() {
        this.getNotes(this.state.itemsPerPage, this.state.page);
    }

    //force is optional argument, if you pass it then it will load all results from local storage object
    getNotes = (itemsPerPage, page) => {
        this.setState({
            toDoNotes: LocalStorageService.findAndPaginateNotes(itemsPerPage, page)
        })
    };

    showNextPage = () => {
        const { itemsPerPage, page } = this.state;
        this.setState({
            page: page + 1
        }, () => {
            let pageNumber = page + 1;
            this.getNotes(itemsPerPage, pageNumber);
        });
    };

    // openNotification = () => {
    //     notification.open({
    //         message: 'Notification Title',
    //         description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //         icon: <Icon type="smile" style={{color: '#108ee9'}}/>
    //     });
    // };

    showPreviousPage = () => {
        const { itemsPerPage, page } = this.state;
        this.setState({
            page: page - 1
        }, () => {
            let pageNumber = page - 1;
            this.getNotes(itemsPerPage, pageNumber);
        });
        // if(this.state.page) this.openNotification();
    };

    confirmDeleteNote = (noteId, isActive) => {
        if (isActive) {
            Modal.confirm({
                title: 'Do you want to delete these To Do\'s?',
                content: 'This note will not come back, make sure you do the right thing :)',
                onOk: () => {
                    this.deleteNote(noteId);
                },
                onCancel: () => {
                },
            });
        } else {
            this.deleteNote(noteId);
        }
    };

    deleteNote = (noteId) => {
        LocalStorageService.deleteNote(noteId);
        this.getNotes(this.state.itemsPerPage, this.state.page);
    };

    toggleModal = (currToDoNote) => {
        const { visible } = this.state;

        !visible ? this.setState({
            visible: !visible,
            currToDoNote: currToDoNote,
        }) : this.setState({
            visible: !visible,
        })
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { toDoNotes, page } = this.state;

        return (
            <React.Fragment>
                <h1>{page}</h1>
                <div className="note-list-container">
                    <span>
                        <button className={"btn-transparent"}
                            onClick={this.showPreviousPage} disabled={!page}>
                            <span className={"icon-left-arrow"}
                                style={{ fontSize: "4rem", cursor: "pointer" }}></span>
                        </button>
                    </span>
                    <div className="note-list-wrapper">
                        {toDoNotes ? toDoNotes.map((toDoNote, index) =>
                            <ToDoNotes toDoNote={toDoNote}
                                visible={this.state.visible}
                                handleOk={this.handleOk}
                                toggleModal={() => this.toggleModal(toDoNote)}
                                currToDoNote={this.state.currToDoNote}
                                confirmDeleteNote={this.confirmDeleteNote}
                                key={index} />) : null}
                    </div>
                    <span>
                        <button className={"btn-transparent"}
                            onClick={this.showNextPage}>
                            <span className={"icon-right-arrow"}
                                style={{ fontSize: "4rem", cursor: "pointer" }}></span>
                        </button>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}