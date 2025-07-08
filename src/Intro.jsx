import { useState } from 'react'
import Input from './Input.jsx'
import {Edit, Submit} from './EditSubmit.jsx'


// next step: turn this to a generic section to be applicable to other things maybe?
export default function Section ({startdata}){
    const [sectiondata, setSectionData] = useState(startdata);
    // sectiondata should be an array (to use map/reduce over) of objects
    // each object should be info describing: text content, css class, label text, type (if applicable)
    const [isEditing, setEditing] = useState(false);

    function handleclick () {
        setEditing(!isEditing);
    }

    function handlechange (e) {
        console.log("handling change")
        const objectId = e.target.id;
        const newText = e.target.value;
        const newdata = sectiondata.map((data)=>{
            if (data.className == objectId){
                return {...data, text: newText}
            } else {
                return data
            }
        })
        setSectionData(newdata);
    }

    if (isEditing) {
        return (
            <>
              {sectiondata.map((info)=> {
                return <Input key={info.className} className={info.className} text={info.text}
                labeltext={info.labeltext} onChange={handlechange} type={info.type}/>;
              })}
              <Submit onclick={handleclick}/>
            </>
        )
    }
    return (
        <>
            {sectiondata.map((info)=> {
                return <p key={info.className} className={info.className}>{info.text}</p>
            })}
            <Edit onclick={handleclick}/>
        </>
    )
}