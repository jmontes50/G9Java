const Parrafo = (props) => {
  console.log(props)
  return (
    <p>
      {props.texto} - {props.fecha}
    </p>
  )
}

export default Parrafo;