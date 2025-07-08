import { useState } from 'react'
import Input from './Input.jsx'
import {Edit, Submit} from './EditSubmit.jsx'
import {introdata} from './defaultdata.js'

// next step: turn this to a generic section to be applicable to other things maybe?
export default function Intro (){
    const [intro, setIntro] = useState(introdata);
    const [isEditing, setEditing] = useState(false);

    function handleclick () {
        setEditing(!isEditing);
    }

    function handlechange (e) {
        console.log("handling change")
        const objectKey = e.target.id;
        const objectValue = e.target.value;
        const newintro = {...intro, [objectKey]: objectValue};
        setIntro(newintro);
        console.log(newintro, objectKey, e.target);
    }

    if (isEditing) {
        return (
            <>
              <Input className="name" labeltext="Name*: " isEditing={isEditing} text={intro.name} onChange={handlechange}/>
              <Input className="email" labeltext="Email*: " isEditing={isEditing} text={intro.email} onChange={handlechange} type="email"/>
              <Input className="number" labeltext="Phone Number*: " isEditing={isEditing} text={intro.number} onChange={handlechange}/>
              <Submit onclick={handleclick}/>
            </>
        )
    }
    return (
        <>
            <p className="name">{intro.name}</p>
            <p className="email">{intro.email}</p>
            <p className="number">{intro.number}</p>
            <Edit onclick={handleclick}/>
        </>
    )
}