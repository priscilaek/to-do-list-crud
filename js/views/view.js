// ACTUALIZA EL HTML CON EL NUEVO VALOR DE LA NOTA
// Y BORRA LA NOTA SELECCIONADA
export function updateNotes(notesElement, notes) {
    const elements = notes.map((note, index) => {
        return /* HTML */ `
        <div class="border p-4 mb-4">
        <div class="flex flex-col md:flex-row items-start md:items-center mb-2">
          <p class="flex-shrink-0 md:col-span-4 truncate">
            ${index + 1}. ${note}
          </p>
        </div>
        <div class="flex md:flex-row-reverse space-x-2">
          <button
            data-index="${index}"
            class="delete-note bg-green-500 text-white">
            Done
          </button>
          <div class="update-field flex text-lg font-semibold space-x-2">
            <input
              type="text"
              id="update-input-${index}"
              class="border rounded p-1 w-full"/>
            <button
              class="save-note bg-blue-500 text-white rounded p-2"
              data-index="${index}">
              Update
            </button>
          </div>
        </div>
      </div>
      `
    })
    notesElement.innerHTML = elements.join("");
}
//OBTIENE EL ELEMENTO DE LA NOTA
export function getNoteInputValue(noteInputElement){
    return noteInputElement.value;
}
//LIMPIA EL ELEMENTO DE LA NOTA
export function clearNoteInput(noteInputElement){
    return (noteInputElement.value = '');
}