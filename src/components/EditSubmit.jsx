function Edit (props){
    return (
        <button onClick={props.onclick}>Edit</button>
    )
}

function Submit (props){
    return (
        <button onClick={props.onclick}>Submit</button>
    )
}

export {Edit, Submit};
export default Edit;