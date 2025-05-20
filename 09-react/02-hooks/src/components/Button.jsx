const Button = ({ counter, setCounter }) => {
  const funcionDisminuir = () => {
    setCounter(counter - 1);
  }

  return (
    <button onClick={funcionDisminuir}>
      Disminuir
   </button>
  )
}

export default Button;