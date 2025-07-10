import Section from "./Section.jsx"
import {useState} from "react";
import {Edit, Submit} from './EditSubmit.jsx'

export default function SectionWEdit({startdata, isFinalized}){
    const [isEditing, setEditing] = useState(false);

    function handleclick () {
        setEditing(!isEditing);
    }

    return (
        <>
            <Section startdata={startdata} isEditingExternal={isEditing}/>
            {(!isFinalized) && ((isEditing) ? <Submit onclick={handleclick}/> : <Edit onclick={handleclick} />)}
        </>
    )
}