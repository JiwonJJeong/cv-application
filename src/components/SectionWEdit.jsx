import Section from "./Section.jsx"
import {useState} from "react";
import {Edit, Submit} from './EditSubmit.jsx'

export default function SectionWEdit({startdata}){
    const [isEditing, setEditing] = useState(false);

    function handleclick () {
        setEditing(!isEditing);
    }

    return (
        <>
            <Section startdata={startdata} isEditingExternal={isEditing}/>
            {(isEditing) ? <Submit onclick={handleclick}/> : <Edit onclick={handleclick} />}
        </>
    )
}