import './App.css'
import Section from "./Section.jsx"
import {introdata, educationdata, experiencedata} from './defaultdata.js'

function App() {

  return (
    <>
       < Section startdata={introdata}/>
       < Section startdata={educationdata}/>
       < Section startdata={experiencedata}/>
    </>
  )
}

export default App
