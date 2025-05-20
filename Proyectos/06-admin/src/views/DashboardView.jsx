import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";

const DashboardView = () => {
  useEffect(() => {
    try {
      const getProducts = async () => {
        const products = await requestProducts();
        console.log(products);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>DashboardView</div>;
};

export default DashboardView;
