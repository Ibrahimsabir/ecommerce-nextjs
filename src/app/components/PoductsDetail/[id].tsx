import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductsData, TopSellData } from "../PoductsDetail/ProductData"; // Import the data arrays
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null); // State for the product

  useEffect(() => {
    if (id) {
      // Find the product in both ProductsData and TopSellData arrays
      const selectedProduct = [
        ...ProductsData,
        ...TopSellData,
      ].find((item) => item.id === parseInt(id));

      setProduct(selectedProduct); // Set the product in the state
    }
  }, [id]); // Re-run the effect when `id` changes

  if (!id) {
    return <p>Loading...</p>; // Show loading while `id` is not available
  }

  if (!product) {
    return <p>Product not found</p>; // Show if no product is found
  }

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center space-x-8">
        <div className="w-full md:w-1/2">
          <Image
            src={product.img}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-sm text-gray-600">{product.description || "No description available"}</p>
          <p className="text-lg font-semibold text-gray-900 mt-3">{product.price || "Price not available"}</p>
          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
          </div>
          <p className="text-md text-gray-600 mt-2">Category: {product.category}</p>
          <p className="text-md text-gray-600">Color: {product.color}</p>
          <div className="mt-4">
            <button className="bg-[#f7d1a6] text-white py-2 px-4 rounded-lg hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
