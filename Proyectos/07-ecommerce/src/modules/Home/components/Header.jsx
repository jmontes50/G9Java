const Header = () => {
  const images = [
    "1.avif",
    "2.avif",
    "3.avif",
    "4.avif",
  ]

  return (
    <div className="relative">
      {/* contenedor imagenes */}
      <div className="carousel w-full h-[400px] overflow-x-scroll scroll-smooth no-scrollbar">
        {images.map((img, i) => (
          <div
            key={i}
            id={`item${i + 1}`}
            className="carousel-item w-full h-full"
          >
            <img src={img} alt={`item carousel ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full gap-2 py-2 absolute bottom-4 z-10">
        {images.map((img, i) => (
          <a
            key={i}
            className={`btn btn-xs`}
            href={`#item${i + 1}`}
          >
            {i + 1}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Header
