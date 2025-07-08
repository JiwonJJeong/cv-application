import './App.css'
import Section from "./Section.jsx"
import {introdata} from './defaultdata.js'

function App() {

  return (
    <>
       < Section startdata={introdata}/>
       {/*< EducationSection /> */}
       {/*< ExperienceSection /> */}
    </>
  )
}

export default App
