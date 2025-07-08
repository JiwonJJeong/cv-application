import { useState } from 'react'
import Input from './Input.jsx'
import {Edit, Submit} from './EditSubmit.jsx'
import {introdata} from './defaultdata.js'

export default function Intro (){
    const [intro, setIntro] = useState(introdata);
    const [isEditing, setEditing] = useState(false);
    if (isEditing) {
        return (
            <>
              <Input className="name" labeltext="Name*: " isEditing={isEditing} />
              <Input className="email" labeltext="Email*: " isEditing={isEditing} type="email"/>
              <Input className="number" labeltext="Phone Number*: " isEditing={isEditing} />
              <Submit onclick={()=>setEditing(false)}/>
            </>
        )
    }
    return (
        <>
            <p className="name">{intro.name}</p>
            <p className="email">{intro.email}</p>
            <p className="number">{intro.number}</p>
            <Edit onclick={()=>setEditing(true)}/>
        </>
    )
}