const ButtonsQty = () => {
  return (
    <div className="flex">
      <button className="p-4 border-y-2 border-l-2 rounded-l-lg cursor-pointer">
        <i className="fa-solid fa-minus"></i>
      </button>
      <span className="p-4 border-y-2">
        1
      </span>
      <button className="p-4 border-y-2 border-r-2 rounded-r-lg cursor-pointer">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default ButtonsQty