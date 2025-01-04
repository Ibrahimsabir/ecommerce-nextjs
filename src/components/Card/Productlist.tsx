import React from "react";
import ProductCard from "./Card"; // Import the ProductCard component

interface Product {
  id: string;
  title: string;
  description: string;
  img: string;
  category: string;
  rating: number;
  price: string;
  priceWas?: string; // Optional field
  color: string;
  aosDelay?: number; // Optional field
  showOrderButton?: boolean; // Optional field
}

interface ProductListProps {
  products: Product[]; // Accept an array of products
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10">
      {/* Map through the products array and render ProductCard */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
