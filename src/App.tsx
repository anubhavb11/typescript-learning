import './App.css'
import Greet from './components/greet'
import Person from './components/person'
import PersonList from './components/personList'
function App() {

  const personName = {
    firstName: 'Anubhav',
    lastName: 'Bansal'
  }

  const nameList = [
    {
      firstName: 'Anubhav',
      lastName: 'Bansal'
    },
    {
      firstName: 'Anubhav',
      lastName: 'Bansal'
    },
    {
      firstName: 'Harshita',
      lastName: 'Bansal'
    }
  ]

  return (
    <>
       <Greet name="Anubhav" messageCount = {10} />
       <Person personName = {personName} />
        <PersonList nameList = {nameList} status="loading" />
      <h1>Hii</h1>
    </>
   
  )
}

export default App
