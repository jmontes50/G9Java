import useNumberStore from "./store/numberStore"

const Editor = () => {
  const { number, incrementar, nombre } = useNumberStore();

  return (
    <div>Number: {number}
    <hr/>
    <button onClick={incrementar}>
      + 1
    </button>
    <hr/>
    <span>{nombre}</span>
    </div>
  )
}

export default Editor