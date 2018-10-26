const objectName = 'ToDoNotes';

export default {
    findNotes() {
        const toDoNotes = getNotesFromLocalStorage(objectName);
        if (toDoNotes) return toDoNotes;
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

        if (key === 'priorityId') {
            toDoNotes = sortByNumbers(notes, key, direction);
            console.log('serwis by numbers', key, direction, page, toDoNotes);
            return paginateNotes(toDoNotes, itemsPerPage, page);
        } else if (key === 'deadline') {
            toDoNotes = sortByDates(notes, key, direction);
            console.log('serwis by dates', key, direction, page, toDoNotes);
            return paginateNotes(toDoNotes, itemsPerPage, page)
        }
    }

};

//helpers functions
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

const paginateNotes = (notes, itemsPerPage, page) => {
    const startIndex = page * itemsPerPage;
    return notes.slice(startIndex, startIndex + itemsPerPage);
};

const sortByNumbers = (notes, key, direction) =>
    notes.sort((a, b) => direction === 'asc' ? a[key] - b[key] : b[key] - a[key]);

const sortByDates = (notes, key, direction) => {
    const sorter = notes.sort((a, b) =>
        direction !== 'asc' ? new Date(a[key]) - new Date(b[key]) : new Date(b[key]) - new Date(a[key])
    );

    console.log('jestem sorter by daty', sorter);
    return sorter;
};