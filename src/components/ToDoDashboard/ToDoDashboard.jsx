import React, {Component} from 'react';
import ToDoNotesList from './ToDoNotesList/ToDoNotesList';
import ToDoHeader from './ToDoHeader/ToDoHeader';
import ToDoButton from '../../common/components/ToDoButton/ToDoButton';
import LocalStorageService from "../../common/service/localStorageService";
import { notification, Icon, Modal } from 'antd';

export default class ToDoDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoNotes: [],
            page: 0,
            itemsPerPage: 6
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

    onUpdateSortedNotes = (sortedNotes) => {
        this.setState({
            toDoNotes: sortedNotes,
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

    stateSetter = currentState => {
        console.log('stateSetter', currentState);
        this.setState({
            toDoNotes: currentState
        })
    };

    render() {
        const {toDoNotes,page} = this.state;
        console.log('dashboard', toDoNotes);
        return (
            <React.Fragment>
                <ToDoHeader notesToSort={toDoNotes}
                            stateSetter={this.stateSetter}/>
                <ToDoNotesList toDoNotes={toDoNotes}
                               page={page}
                               showPreviousPage={this.showPreviousPage}
                               showNextPage={this.showNextPage}
                               confirmDeleteNote={this.confirmDeleteNote}/>
                <div className="btn-wrapper">
                    <ToDoButton btnClass="add-note-btn" routeTo="/todoform"/>
                </div>
            </React.Fragment>
        )
    }
}