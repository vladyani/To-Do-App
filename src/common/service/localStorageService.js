export default {
    findNotes() {
        const toDoNotes = JSON.parse(localStorage.getItem('ToDoNotes'));
        return toDoNotes;
    },
    createNote(note) {
        let toDoNotes;
        const isNotesExist = JSON.parse(localStorage.getItem('ToDoNotes'));
        if (isNotesExist) {
            toDoNotes = JSON.parse(localStorage.getItem('ToDoNotes'));
            toDoNotes.push(note);
            localStorage.setItem('ToDoNotes', JSON.stringify(toDoNotes));
        } else {
            localStorage.setItem('ToDoNotes', JSON.stringify([]));
            toDoNotes = JSON.parse(localStorage.getItem('ToDoNotes'));
            toDoNotes.push(note);
            localStorage.setItem('ToDoNotes', JSON.stringify(toDoNotes));
        }
    },
    deleteNote(noteId) {
        const toDoNotes = JSON.parse(localStorage.getItem('ToDoNotes'));
        let indexOfNote = toDoNotes.findIndex(note => note.noteId === noteId);
        console.log(indexOfNote);
        toDoNotes.splice(indexOfNote, 1);
        localStorage.setItem('ToDoNotes', JSON.stringify(toDoNotes));
    }
}

