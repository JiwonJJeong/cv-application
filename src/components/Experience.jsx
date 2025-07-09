import Section from "./Section.jsx"
import Input from "./Input.jsx"
import {useState} from "react";
import {Edit, Submit} from './EditSubmit.jsx'

export default function Experience ({data, extdata}){
    const [exts, setExts] = useState([{text: extdata.text, id: crypto.randomUUID()}]);
    const [isEditing, setEditing] = useState(false);

    function addExtendable(){
        const newTextAndIds = [...exts, {text: "Describe responsibility...", id: crypto.randomUUID()}];
        setExts(newTextAndIds);
    }

    function removeExtendable(idToRemove){
        const newExtIds = exts.filter((obj)=> obj.id != idToRemove);
        setExts(newExtIds);
    }

    function handleclick () {
        setEditing(!isEditing);
    }

    function handleChange(e){
        const objectId = e.target.id;
        const newText = e.target.value;
        console.log("handling change" + objectId + newText)
        const newdata = exts.map((data)=>{
            if (data.id == objectId){
                return {...data, text: newText}
            } else {
                return data
            }
        })
        setExts(newdata);
    }


    return(
    <>
        <Section startdata={data} isEditingExternal={isEditing} setEditingExternal={setEditing}></Section>
        {(isEditing) ? 
            <>
                {exts.map((obj)=> <div key={obj.id} className={extdata.className}>
                <Input className={obj.id} text={obj.text} labeltext={extdata.label} onChange={handleChange}></Input>
                <button onClick={()=>removeExtendable(obj.id)}>-</button>
                </div>
                )}
                <button onClick={addExtendable}>Add Responsibility</button>
            </>
            :
            <ul className={extdata.className}>
                {exts.map((obj)=> <li key={obj.id}>{obj.text}</li>)}
            </ul>
        }
        {(isEditing) ? <Submit onclick={handleclick}/> : <Edit onclick={handleclick} />}
    </>
    )   
}