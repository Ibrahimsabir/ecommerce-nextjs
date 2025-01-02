"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Product } from '@/app/productdetail/[id]/page';
import { ProductsData } from '../productdata/productData';

const ProductDetailGrid = ({ params }: { params: { id: string } }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch product details from ProductsData based on the id
  useEffect(() => {
    const fetchProductDetails = () => {
      // Find the product based on the `id` from ProductsData
      const fetchedProduct = ProductsData.find((prod) => prod.id === params.id);

      if (fetchedProduct) {
        setProduct(fetchedProduct); // Set product data
      }
    };

    fetchProductDetails();
  }, [id]);

  // Detect screen size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className={`w-full max-w-[1240px] mx-auto py-8`}>
      {isMobile ? (
        // Mobile Layout
        <div>
          {/* Large Image */}
          <div className="w-full h-[530px] rounded overflow-hidden mb-4">
            <Link href="">
              <div className="group relative">
                <Image
                  src={`/${product?.img}`} // Main image
                  width={500}
                  height={500}
                  alt="Large Image"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            </Link>
          </div>

          {/* Row of Smaller Images (Dynamic Loop) */}
          <div className="grid grid-cols-3 gap-4">
            {product?.images.map((img, idx) => (
              <div key={idx} className="w-full h-[162px] rounded overflow-hidden">
                <Link href={`/small-image-${idx + 1}`}>
                  <div className="group relative">
                    <Image
                      src={`/${img}`} // Dynamic small image paths
                      width={152}
                      height={162}
                      alt={`Small Image ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="grid grid-cols-[152px_444px] gap-4">
          {/* First Column (Dynamic Loop) */}
          <div className="grid grid-rows-3 gap-4">
            {product?.images.map((img, idx) => (
              <div key={idx} className="w-[152px] h-[162px] rounded overflow-hidden">
                <Link href={`/small-image-${idx + 1}`}>
                  <div className="group relative">
                    <Image
                      src={`/${img}`} // Dynamic small image paths
                      width={152}
                      height={162}
                      alt={`Small Image ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Second Column (Main Image) */}
          <div className="w-[444px] h-[530px] rounded overflow-hidden">
            <Link href="/large-image">
              <div className="group relative">
                <Image
                  src={`/${product?.img}`} // Main image
                  width={500}
                  height={500}
                  alt="Large Image"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailGrid;
