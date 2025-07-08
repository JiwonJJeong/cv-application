export default function Input ({classname, isEditing=false, text, type="text", labeltext}){

    if (isEditing) {
        return (
            <>
                <label>{labeltext}</label>
                <input
                type={type}
                value={text}
                className={classname}
                />
            </> )
    } 
    return (
            <p className={classname}>
            {text}
            </p>
    )
}
