import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";

const DashboardView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const productsObtained = await requestProducts();
        // console.log(products);
        setProducts(productsObtained);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>DashboardView</div>;
};

export default DashboardView;
