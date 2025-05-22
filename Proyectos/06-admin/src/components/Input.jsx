const Input = (props) => {
  const { value, name, handleInput, label, type } = props;
  console.log({ value, name, handleInput, label, type});
  return (
    <div className="mb-3 p-2">
      <label></label>
      <input />
    </div>
  )
}

export default Input