import './App.css'
import Greet from './components/greet'
import Person from './components/person'
import PersonList from './components/personList'
import Heading from './components/heading'
import Oscar from './components/oscar'
import HeadingNext from './components/headingNext'
import ClickEventExample from './components/ClickEventExample'
import LoggedIn from './stateSection2/LoggedIn'
import UseStateFutureValues from './stateSection2/UseStateFutureValues'

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
      firstName: 'Manish',
      lastName: 'Bansal'
    },
    {
      firstName: 'Harshita',
      lastName: 'Bansal'
    },
    {
      firstName: "Sushma",
      lastName: "Bansal"
    }
  ]

  return (
    <>
    {/* SECTION 1 PASSING THE TYPE SCRIPT PROPS */}
       {/* <Greet name="Anubhav" messageCount = {10} />
       <Person personName = {personName} />
        <PersonList nameList = {nameList} status="loading" />
        <Heading>place holder child prop</Heading>
        <HeadingNext children = {"place holder for next child prop"}/>
        <Oscar>
          <Heading>
            Oscar Goes TO Decaprio 
          </Heading>
        </Oscar>
        <ClickEventExample
        handleClick={(e,id) => {
          console.log("Clicked",e,id)
        }}
        handleChange={(e,id)=>{
          console.log("changed",e,id);
        }}
        />
      <h1>Hii</h1> */}

    {/* SECTION 2 HOOKS AND TYPESCRIPT */}
    <LoggedIn/>
    <UseStateFutureValues/>

    </> 
   
  )
}

export default App
