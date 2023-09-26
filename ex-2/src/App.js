import { useState } from 'react'
import Note from './Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> 
      <ul>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
      </ul>
       <form onSubmit={addNote}>  {/*Decir que se abrira un formulario que cuando lo envies se anadira un objeto */}
        <input value={newNote} onChange={handleNoteChange} /> {/*Inicializa vacio el espacio donde llenaras la info y lee la info que estara dentro*/}
        <button type="submit">save</button>  {/* das click en submit para se envie esa informacion en donde se va a guardar*/}
      </form>
    </div>
  )
}

export default App