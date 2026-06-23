export const LabelTextArea = ({ label = '', name = '', text = '', onChange = () => { } }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} onChange={onChange}>{text}</textarea>
        </>
    )
}
