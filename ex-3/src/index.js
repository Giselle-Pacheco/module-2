import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
  )
})

addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }
  
  
axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
    console.log(response)
    })
  }


ReactDOM.render(<App />, document.getElementById('root'))