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
    </div>
  )
}

export default Header
