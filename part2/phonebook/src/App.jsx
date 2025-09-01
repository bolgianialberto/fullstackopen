import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Harto ellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const onInputChange = (event) => {
    setNewName(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const processedNewName= newName.toLowerCase().replace(/\s+/g, '')

    let exists = false
    for (let index = 0; index < persons.length; index++) {
      const element = persons[index]
      const processedElement = element.name.toLowerCase().replace(/\s+/g, '');
      if(processedNewName === processedElement){
        exists = true
        break
      }
    }

    if(!exists){
      const newObjName = {
        name: newName
      }
      setPersons(persons.concat(newObjName))
      setNewName('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          name: <input value={newName} onChange={onInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App