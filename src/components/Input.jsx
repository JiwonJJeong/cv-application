export default function Input ({className, text, type="text", labeltext, onChange}){

        return (
            <div >
                <label htmlFor={className}>{labeltext}</label>
                <input
                type={type}
                value={text}
                id={className}
                onChange={onChange}
                />
            </div> )
}
