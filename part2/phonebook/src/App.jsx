import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

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
      <Filter filterName={filterName} onFilterChange={onFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm onFormSubmit={onFormSubmit} newName={newName} onNameChange={onNameChange} newNumber={newNumber} onNumberChange={onNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName}/>
    </div>
  )
}

export default App