import ProductCard from "./ProductCard";
import { use } from "react";

const Products = ({ productsPromise, addToCart }) => {
    const products = use(productsPromise);

  return (
    <div className="grid md:grid-cols-3 gap-6 px-6 mb-3  justify-between items-center mx-auto container">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart}  />
      ))}
    </div>
  );
};

export default Products;