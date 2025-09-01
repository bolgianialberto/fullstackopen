import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const onNameChange = (event) => {
    setNewName(event.target.value)
  }

  const onNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const onFilterChange = (event) => {
    setFilterName(event.target.value)
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
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newObjName))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with 
      <input value={filterName} onChange={onFilterChange}/>
      <h2>Add a new</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        (
          filterName
          ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
          : persons
        ).map(person => <div key={person.name}>{person.name}</div>)
      }
    </div>
  )
}

export default App