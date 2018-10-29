const objectName = 'ToDoNotes';

export default {
    findNote(noteId) {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        const indexOfNote = findNoteById(toDoNotes, noteId);
        return toDoNotes[indexOfNote];
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
    updateNote(noteId, noteObject) {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        const indexOfNote = findNoteById(toDoNotes, noteId);
        toDoNotes[indexOfNote] = noteObject;
        setOrUpdateLocalStorage(objectName, toDoNotes);
    },
    updateNoteStatus(noteId, key, value) {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        const indexOfNote = findNoteById(toDoNotes, noteId);
        toDoNotes[indexOfNote][key] = value;
        setOrUpdateLocalStorage(objectName, toDoNotes);
    },
    deleteNote(noteId) {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        let indexOfNote = findNoteById(toDoNotes, noteId);
        toDoNotes.splice(indexOfNote, 1);
        setOrUpdateLocalStorage(objectName, toDoNotes);
    },
    //force is optional argument, if you pass it then it will load all results from local storage object
    findAndPaginateNotes(itemsPerPage, page, force) {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        if (force) return toDoNotes;
        if (toDoNotes) return paginateNotes(toDoNotes, itemsPerPage, page);
    },
    sortNotes(itemsPerPage, page, key, direction) {
        let toDoNotes;
        const notes = getNotesFromLocalStorage(objectName);

        if (key === 'priorityId') toDoNotes = sortByNumbers(notes, key, direction);
        if (key === 'deadline') toDoNotes = sortByDates(notes, key, direction);

        return paginateNotes(toDoNotes, itemsPerPage, page);
    }
};

//helpers functions
const getNotesFromLocalStorage = name => JSON.parse(localStorage.getItem(name));

const setOrUpdateLocalStorage = (name, object) => localStorage.setItem(name, JSON.stringify(object));

const findNoteById = (notes, noteId) => notes.findIndex(note => note.noteId === noteId);

const pushNoteToLocalStorage = (name, note) => {
    let toDoNotes;
    toDoNotes = JSON.parse(localStorage.getItem(name));
    toDoNotes.push(note);
    localStorage.setItem(name, JSON.stringify(toDoNotes));
};

const paginateNotes = (notes, itemsPerPage, page) => {
    const startIndex = page * itemsPerPage;
    return notes.slice(startIndex, startIndex + itemsPerPage);
};

const sortByNumbers = (notes, key, direction) =>
    notes.sort((a, b) => direction !== 'asc' ? a[key] - b[key] : b[key] - a[key]);

const sortByDates = (notes, key, direction) => notes.sort((a, b) =>
    direction === 'asc' ? new Date(a[key]) - new Date(b[key]) : new Date(b[key]) - new Date(a[key]));