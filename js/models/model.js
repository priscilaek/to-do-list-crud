//MATRIZ DE NOTAS EXISTENTES
export function addNote(notes, note) {
    return [...notes,note]
}
//MATRIZ QUE EXCLUYE LA NOTA SELECCIONADA
export function deleteNote(notes, index) {
    return notes.filter((note, noteIndex) => noteIndex !== index);
}
//MATRIZ QUE ACTUALIZA LA NOTA SELECCIONADA
export function updateNote(notes, index, updatedNote) {
    return notes.map((note, noteIndex) => {
        if (noteIndex === index) {
            return updatedNote;
        }
        return note;
    });
}
//MATRIZ QUE GUARDA LAS NOTAS EN EL LOCAL STORAGE
export function saveNotesToLocalStorage(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}
//MATRIZ QUE CARGA LAS NOTAS DEL LOCAL STORAGE
export function loadNotesFromLocalStorage() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        return JSON.parse(notes);
    }
    return [];
}