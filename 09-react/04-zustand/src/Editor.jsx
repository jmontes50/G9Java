import useNumberStore from "./store/numberStore"

const Editor = () => {
  const { number, incrementar } = useNumberStore();

  return (
    <div>Number: {number}
    <hr/>
    <button onClick={incrementar}>
      + 1
    </button>
    </div>
  )
}

export default Editor