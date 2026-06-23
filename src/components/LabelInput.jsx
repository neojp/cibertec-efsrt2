export const LabelInput = (
    { label = '',
        name = '',
        type = 'text',
        defaultValue = '',
        onChange = () => { }
    }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} defaultValue={defaultValue} onChange={onChange} />
        </>
    )
}
