// PATRON MVC
// MODELO - VISTA - CONTROLADOR
// ejercicio-crud.js - CONTROLADOR
// ES UN CARCHIVO QUE COMBINA TANTO LA PARTE LOGICA COMO LA PARTE DE LAS VISTAS, APLICANDO SELECCION Y EVENTOS

import {
    addNote, //AGREGAR UNA NOTA
    deleteNote, // BORRAR UNA NOTA
    updateNote, // ACTUALIZAR UNA NOTA
    saveNotesToLocalStorage, // GUARDAR NOTAS EN LOCALSTORAGE
    loadNotesFromLocalStorage, // CARGAR NOTAS DESDE LOCALSTORAGE
} from './models/model.js';

// SECCION PARA ACTUALIZAR EL DOM - MANIPULACION
import {
 updateNotes, // ACTUALIZAR NOTAS DENTRO DE LA PAGINA
 getNoteInputValue, // OBTENER LA NOTA DEL INPUT QUE ESCRIBIO EL USUARIO
 clearNoteInput, // BORRAR EL INPUT CUANDO EL USUARIO TERMINA DE ESCRIBIR
} from './views/view.js';

// PSEUDOCODIGO
// 1. LEER LAS NOTAS HASTA EL PUNTO MAS ACTUAL
let notes = loadNotesFromLocalStorage();
//console.log("notes",notes);

// 2. SELECCION
const noteInputElement = document.querySelector('#note-input');
const addNoteButtonElement = document.querySelector('#add-note-button');
const notesElement = document.querySelector('#notes');

// 3. ACTUALIZAR DATOS
// INPUT updateNotes(notesElement: HTMLNodeElement, notes: [texto, texto, texto ])
updateNotes(notesElement, notes);

// 4. EVENTOS
// A. AGREGAR UNA NOTA

addNoteButtonElement.addEventListener("click", (event) => {
    event.preventDefault(); // EVITAR EL REFRESH AL DAR CLICK EN EL BOTON
    // OBTENER EL VALOR DEL INPUT
    const note = getNoteInputValue(noteInputElement);
    // AGREGAR LA NOTA AL ARREGLO DE NOTAS
    notes = addNote(notes, note);
    // SALVAR LAS NOTAS EN LOCALSTORAGE
    saveNotesToLocalStorage(notes);
    // ACTUALIZAR LAS NOTAS
    updateNotes(notesElement, notes);
    // LIMPIAR EL INPUT
    clearNoteInput(noteInputElement);
})

// B. MANIPULAR NOTA
// - ACTUALIZAR UNA NOTA
// - BORRAR UNA NOTA

notesElement.addEventListener("click", (event) => {
    console.log(event.target)
    if(event.target.hasAttribute("data-index")) {
        console.log("esto es un boton")
        const index = Number(event.target.getAttribute("data-index"));
        console.log("index", index);

        // A. BORRADO DE NOTAS
        if(event.target.classList.contains("delete-note")) {
            console.log("click en el boton de borrado")
            notes = deleteNote(notes, index);
            saveNotesToLocalStorage(notes);
            updateNotes(notesElement, notes);
        }
        // B. ACTUALIZA Y SALVAR NOTA DESPUES DE LA EDICION
        if (event.target.classList.contains("save-note")) {
            console.log("entrando a save-note")
            const updateInputElement = event.target.parentNode.querySelector("input");
            console.log("updateInputElement", updateInputElement);
            const updatedNote = updateInputElement.value;

            notes = updateNote(notes, index, updatedNote)
            console.log("notes", notes);
            saveNotesToLocalStorage(notes);
            updateNotes(notesElement, notes);
        }
    }
});