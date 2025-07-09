import Section from "./Section.jsx"
import Input from "./Input.jsx"
import {useState} from "react";
import {Edit, Submit} from './EditSubmit.jsx'

export default function Experience ({data, extdata}){
    const textAndId = {text: extdata.text, id: crypto.randomUUID()};
    const [exts, setExts] = useState([textAndId]);
    const [isEditing, setEditing] = useState(false);

    function addExtendable(){
        const newTextAndIds = [...exts, {text: "Describe responsibility...", id: crypto.randomUUID()}];
        setExts(newTextAndIds);
    }

    function removeExtendable(idToRemove){
        const newExtIds = exts.filter((id)=> id != idToRemove);
        setExts(newExtIds);
    }

    function handleclick () {
        setEditing(!isEditing);
    }

    function handleChange(e){
        console.log("handling change")
        const objectId = e.target.id;
        const newText = e.target.value;
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
                {exts.map((id)=> <div key={id} className={extdata.className}>
                <Input text={extdata.text} labelText={extdata.text} onChange={handleChange}></Input>
                <button onClick={()=>removeExtendable(id)}>-</button>
                </div>
                )}
                <button onClick={addExtendable}>Add Responsibility</button>
            </>
            :
            <ul className={extdata.className}>
                {exts.map((id)=> <li key={id}>{extdata.text}</li>)}
            </ul>
        }
        {(isEditing) ? <Submit onclick={handleclick}/> : <Edit onclick={handleclick} />}
    </>
    )   
}