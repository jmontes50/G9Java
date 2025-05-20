const Validator = ({ counter }) => {
  console.log(counter)
  return (
    <>
      <h3>El valor del contador es: {counter}</h3>
      <p>
        Si tiene 13 o más esta aprobado, el alumno esta   
        {counter >= 13 ? " Aprobo" : " Desaprobado"}
      </p>
    </>
  )
}

export default Validator;