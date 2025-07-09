import { useState } from 'react'
import Input from './Input.jsx'


// next step: turn this to a generic section to be applicable to other things maybe?
export default function Section ({startdata, isEditingExternal}){
    const [sectiondata, setSectionData] = useState(startdata);
    // sectiondata should be an array (to use map/reduce over) of objects
    // each object should be info describing: text content, css class, label text, type (if applicable)



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

    if (isEditingExternal) {
        return (
            <div>
              {sectiondata.map((info)=> {
                return <Input key={info.className} className={info.className} text={info.text}
                labeltext={info.label} onChange={handlechange} type={info.type}/>;
              })}
            </div>
        )
    }

    function numberStringDateToWordString (string){
        const date = new Date(string);
        return date.toString().slice(4,15);
    }

    const datetext = sectiondata.reduce((text, info)=> {
        if (info.className =="datestart"){
            return numberStringDateToWordString(info.text) + text;
        } else if (info.className == "dateend"){   
            return (info.text != "") ? text + "~" + numberStringDateToWordString(info.text): text + "~current";
        } else{
            return text;
        }
    }, "")
    return (
        <>
            {sectiondata.map((info)=> {
                switch (info.className){
                    case "name":
                        return <h2 key={info.className} className={info.className}>{info.text}</h2>
                    case "datestart":
                        return null;
                    case "dateend":
                        return <p key={info.className} className={info.className}>{datetext}</p>
                    default:
                        return <p key={info.className} className={info.className}>{info.text}</p>
                }
            })}
        </>
    )
}