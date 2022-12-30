
const InputField = ({text,hamdleInput,handleSubmit}) => {
    return (
        <label className="">
            <input value={text} type="text" onChange={(e) => { hamdleInput(e.currentTarget.value) }} />
            <button onClick={handleSubmit}>add todo</button>
        </label>
    )
}

export default InputField;