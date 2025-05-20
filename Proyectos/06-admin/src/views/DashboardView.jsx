import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";

const DashboardView = () => {

  useEffect(async () => {
    try {
      const products = await requestProducts()
      console.log(products)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return <div>DashboardView</div>;
};

export default DashboardView;
