import './App.css'
import Section from "./Section.jsx"
import {introdata, educationdata, experiencedata} from './defaultdata.js'
import { useState } from 'react'

function App() {
  const [educationIds, setEducationIds] = useState([crypto.randomUUID()]);
  const [experienceIds, setExperienceIds] = useState([crypto.randomUUID()]);

  function addEducation(){
    const newIds = [...educationIds,crypto.randomUUID()];
    setEducationIds(newIds);
  }

  function addExperience(){
    const newIds = [...experienceIds,crypto.randomUUID()];
    setExperienceIds(newIds);
  }

  return (
    <>
       < Section startdata={introdata}/>
       {educationIds.map((id)=>{
        return < Section key={id} startdata={educationdata}/>
       })}
       < button onClick={addEducation}>Add Education</button>
       {experienceIds.map((id)=>{
        return < Section key={id} startdata={experiencedata}/>
       })}
       < button onClick={addExperience}>Add Experience</button>
    </>
  )
}

export default App
