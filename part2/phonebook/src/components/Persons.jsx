import Person from './Person'

const Persons = ({persons, filterName}) => {
    const filtered = 
        filterName
        ? persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
        : persons

    return filtered.map(person => <Person key={person.name} person={person}/>)  
}

export default Persons