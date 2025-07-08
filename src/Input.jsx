export default function Input ({classname, text, type="text", labeltext}){

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
