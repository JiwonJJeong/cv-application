import { useState } from 'react'
import Input from './Input.jsx'

export default function Intro (){
    const isEditing =false;
    return (
        <>
            <Input className="name" labeltext="Name*: " isEditing={isEditing} />
            <Input className="email" labeltext="Email*: " isEditing={isEditing} type="email"/>
            <Input className="number" labeltext="Phone Number*: " isEditing={isEditing} type="number"/>
        </>
    )
}