import '../styles/App.css'
import SectionWEdit from "./SectionWEdit.jsx"
import Experience from "./Experience.jsx"
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
       < SectionWEdit startdata={introdata}/>

       <h1><u>Education</u></h1>
       {educationIds.map((id)=>{
        return (<div key={id}>
        < SectionWEdit  startdata={educationdata}/>
        < button onClick={()=>removeEducation(id)}>Remove</button>
        </div>
        )
       })}
       < button onClick={addEducation}>Add Education</button>

       <h1><u>Experience</u></h1>
       {experienceIds.map((id)=>{
        return (<div key={id}>
          < Experience data={experiencedata.data} extdata={experiencedata.extendable}/>
          < button onClick={()=>removeExperience(id)}>Remove</button>
          </div>
          )
       })}
       < button onClick={addExperience}>Add Experience</button>
    </>
  )
}

export default App
