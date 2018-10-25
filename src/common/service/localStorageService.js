const objectName = 'ToDoNotes';

export default {
    findNotes() {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        if (toDoNotes) return toDoNotes;
    },
    //force is optional argument, if you pass it then it will load all results from local storage object
    findAndPaginateNotes(itemsPerPage, page, force) {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        if (force) return toDoNotes;
        if (toDoNotes) {
            const startIndex = page * itemsPerPage
            const paginToDoNotes = toDoNotes.slice(startIndex, startIndex + itemsPerPage);
            return paginToDoNotes;
        }
    },
    createNote(note) {
        const isNotesExist = getNotesFromLocalStorage(objectName);
        if (isNotesExist) {
            pushNoteToLocalStorage(objectName, note);
        } else {
            setOrUpdateLocalStorage(objectName, []);
            pushNoteToLocalStorage(objectName, note);
        }
    },
    deleteNote(noteId) {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        let indexOfNote = toDoNotes.findIndex(note => note.noteId === noteId);
        toDoNotes.splice(indexOfNote, 1);
        setOrUpdateLocalStorage(objectName, toDoNotes);
    }
};

const getNotesFromLocalStorage = name =>
    JSON.parse(localStorage.getItem(name));

const setOrUpdateLocalStorage = (name, object) =>
    localStorage.setItem(name, JSON.stringify(object));

const pushNoteToLocalStorage = (name, note) => {
    let toDoNotes;
    toDoNotes = JSON.parse(localStorage.getItem(name));
    toDoNotes.push(note);
    localStorage.setItem(name, JSON.stringify(toDoNotes));
};
