"use client";

import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";

import ClothImage from "../public/images/ClothImage.png";
import ClothImageGreen from "../public/images/ClothImage1.png";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: StaticImageData;
};

const products: {
  newArrivals: Product[];
  topSelling: Product[];
} = {
  newArrivals: [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
      image: ClothImage,
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
      image: ClothImage,
    },
    {
      id: 3,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
      image: ClothImage,
    },
    {
      id: 4,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
      image: ClothImage,
    },
    {
      id: 9,
      name: "New Arrival Graphic Tee",
      price: 35,
      rating: 4.7,
      image: ClothImage,
    },
    {
      id: 10,
      name: "New Arrival Hoodie",
      price: 50,
      rating: 4.6,
      image: ClothImage,
    },
    {
      id: 11,
      name: "New Arrival Sweatshirt",
      price: 45,
      rating: 4.8,
      image: ClothImage,
    },
    {
      id: 12,
      name: "New Arrival Polo",
      price: 40,
      rating: 4.4,
      image: ClothImage,
    },
  ],
  topSelling: [
    {
      id: 5,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.9,
      image: ClothImageGreen,
    },
    {
      id: 6,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.9,
      image: ClothImageGreen,
    },
    {
      id: 7,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.9,
      image: ClothImageGreen,
    },
    {
      id: 8,
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.9,
      image: ClothImageGreen,
    },
  ],
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
      <div className="flex items-center mb-2">
        <div className="flex items-center mr-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{product.rating}/5</span>
      </div>
      <div className="font-bold text-black">₹ {product.price}</div>
    </div>
  );
}

export default function ProductGrid() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount(products.newArrivals.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className='text-5xl text-black mb-8 font-["Bowlby_One_SC",sans-serif] font-black'>
            NEW ARRIVALS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.newArrivals.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {visibleCount < products.newArrivals.length && (
            <button
              onClick={handleViewMore}
              className="text-gray-600 hover:text-black border border-gray-300 px-6 py-3 rounded-full hover:border-black transition-colors"
            >
              View More
            </button>
          )}
        </div>

        <div className="text-center">
          <h2 className='text-3xl sm:text-4xl text-black mb-8 font-["Bowlby_One_SC",sans-serif] font-black'>
            TOP SELLING
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
