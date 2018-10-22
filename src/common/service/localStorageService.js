export default {
    findNotes() {
        const toDoNotes = JSON.parse(localStorage.getItem('ToDoNotes'));
        return toDoNotes;
    },
    createNote(note) {
        const toDoNotes = JSON.parse(localStorage.getItem('ToDoNotes'));
        toDoNotes.push(note);
        localStorage.setItem('ToDoNotes', JSON.stringify(toDoNotes));
    }
}

