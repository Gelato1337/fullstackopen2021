import React, { useState } from 'react'
import Person from './components/phonebook'




const App = (props) => {

  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterWords, setFilterWords ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    var isInList = false

    for (var i = 0; i<persons.length; i++) {
        if (persons[i].name === newName) {
          window.alert(`${newName} is already added to phonebook`)
          isInList = true

        }
    }
    if (isInList === false) {
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    } else {isInList = false}
  }

  const handlePersonAdd = (event) => {
    console.log(event.target.value) 

    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    console.log(event.target.value) 

    setNewNumber(event.target.value)
  }


  const handlefilterWords = (event) => {
    console.log(event.target.value) 
    setFilterWords(event.target.value)
  }


  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterWords))
  
  
  const filterPersons = (event) => {
    event.preventDefault()
    const words = filterWords

    setFilterWords(words)
  }
  


  return (
    <div>
      <h2>Phonebook</h2>


      <form onSubmit={filterPersons}>
        <div>
          filter: <input value={filterWords}
          onChange={handlefilterWords}/>
        </div>
      </form>

<div>

</div>


      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handlePersonAdd}/>
        </div>
        <p>number:<input value={newNumber}
        onChange={handleNumberAdd}/> </p>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
        <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )

}

export default App
