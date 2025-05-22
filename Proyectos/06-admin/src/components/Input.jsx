const Input = (props) => {
  const { value, name, handleInput, label, type } = props;
  // console.log({ value, name, handleInput, label, type});
  return (
    <div className="mb-3 p-2">
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <input 
        type={type}
        placeholder={`Ingrese ${label}`}
        id={name}
        name={name} //el name es importante
        value={value[name]} //product['descripcion']
        onChange={handleInput}
        className="input w-full"
      />
    </div>
  )
}

export default Input;