import '../styles/App.css'
import "../styles/Section.css"
import SectionWEdit from "./SectionWEdit.jsx"
import Experience from "./Experience.jsx"
import {introdata, educationdata, experiencedata} from './defaultdata.js'
import { useState } from 'react'

function App() {
  const [educationIds, setEducationIds] = useState([crypto.randomUUID()]);
  const [experienceIds, setExperienceIds] = useState([crypto.randomUUID()]);
  const [isFinalized, setFinalized] = useState(false);

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

  function finalize(){
    const userResponse = confirm("This will prevent further editing! Are you sure?");
    if (userResponse){
      setFinalized(true)
    };
  }

  return (
    <>
       <article>< SectionWEdit isFinalized={isFinalized} startdata={introdata}/></article>

       {educationIds.length>0 && <h1><u>Education</u></h1>}
       {educationIds.map((id)=>{
        return (<article key={id}>
        < SectionWEdit isFinalized={isFinalized} startdata={educationdata}/>
        {(!isFinalized) && < button onClick={()=>removeEducation(id)}>Remove</button>}
        </article>
        )
       })}
       {!isFinalized && < button onClick={addEducation}>Add Education</button>}

       {experienceIds.length>0 && <h1><u>Experience</u></h1>}
       {experienceIds.map((id)=>{
        return (<article key={id}>
          < Experience isFinalized={isFinalized} data={experiencedata.data} extdata={experiencedata.extendable}/>
          {(!isFinalized) && < button onClick={()=>removeExperience(id)}>Remove</button>}
          </article>
          )
       })}
       {!isFinalized && < button onClick={addExperience}>Add Experience</button>}
       {!isFinalized && < button onClick={finalize}>I'm done!</button>}
    </>
  )
}

export default App
