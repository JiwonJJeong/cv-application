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

  function removeEducation(idToRemove){
    const newIds = educationIds.filter((id) => id!=idToRemove);
    setEducationIds(newIds);
  }

  function removeExperience(idToRemove){
    const newIds = experienceIds.filter((id) => id!=idToRemove);
    setExperienceIds(newIds);
  }

  return (
    <>
       < Section startdata={introdata}/>
       <h1><u>Education</u></h1>
       {educationIds.map((id)=>{
        return (<div key={id}>
        < Section  startdata={educationdata}/>
        < button onClick={()=>removeEducation(id)}>Remove</button>
        </div>
        )
       })}
       < button onClick={addEducation}>Add Education</button>
       <h1><u>Experience</u></h1>
       {experienceIds.map((id)=>{
        return (<div key={id}>
          < Section  startdata={experiencedata}/>
          < button onClick={()=>removeExperience(id)}>Remove</button>
          </div>
          )
       })}
       < button onClick={addExperience}>Add Experience</button>
    </>
  )
}

export default App
