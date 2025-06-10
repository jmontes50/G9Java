import { useRef } from "react";
import useGetAxios from "../../../hooks/useGetAxios";
import Loading from "../../ui/Loading";
import ProductCard from "../../ui/ProductCard";

const ProductsCarousel = () => {
  const scrollRef = useRef(null);
  const URL = "https://simple-api-3maz.onrender.com/productos";
  const { data, loading, error } = useGetAxios(URL);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.9;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <Loading />;

  if (error) {
    return (
      <p className="text-xl p-4">
        Ocurrió un error, por favor intente de nuevo en unos momentos
      </p>
    );
  }

  return (
    <div className="relative max-w-[1200px] mx-auto px-4 py-6">
      <h2 className="text-3xl mb-4 font-semibold">Productos Destacados</h2>

      <div className="relative min-h-[350px]">
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline shadow"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          {data?.productos?.slice(0, 10).map((item) => (
            <div key={item.id} className="min-w-[250px]">
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline shadow"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductsCarousel;
