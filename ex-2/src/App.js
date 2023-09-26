import { useState } from 'react'


const App = () => {
  const [names, setName] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')



  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      id: names.length+1,
    }
    setName(names.concat(contactObject))
    setNewName('')
  }



  const handleNamesChange = (event) => {
    setNewName(event.target.value)
  }

  if (names.some((contact) => contact.name === newName)) {
    alert(`${newName} is already added to phonebook.`)
    return
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name:  <input value={newName} onChange={handleNamesChange} /> 
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {names.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
        </ul>
    </div>
  )
  
}

export default App