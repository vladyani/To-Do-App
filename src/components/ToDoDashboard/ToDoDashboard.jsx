import React from 'react';
import ToDoNotesList from './ToDoNotesList/ToDoNotesList';
import ToDoButton from '../../common/components/ToDoButton/ToDoButton';
import ToDoHeader from './ToDoHeader/ToDoHeader';

<<<<<<< HEAD
export default class ToDoDashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <ToDoHeader />
                <ToDoNotesList />
                <div className="btn-wrapper">
                    <ToDoButton btnClass="add-note-btn" routeTo="/todoform" />
                </div>
            </React.Fragment>
        );
    }
}
=======
const ToDoDashboard = () => (
    <React.Fragment>
        <ToDoNotesList/>
        <div className="btn-wrapper">
            <ToDoButton btnClass="add-note-btn" routeTo="/todoform"/>
        </div>
    </React.Fragment>
);

export default ToDoDashboard;
>>>>>>> 681771ecc3bfc8aae393239b75a287fea488b0ff
