import './App.css'
import Section from "./Intro.jsx"
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
