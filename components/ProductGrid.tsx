'use client'

import { Star } from 'lucide-react'

type Product = {
  id: number
  name: string
  price: number
  rating: number
  image: string
}

const products: {
  newArrivals: Product[]
  topSelling: Product[]
} = {
  newArrivals: [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.5, image: '/api/placeholder/200/250' },
    { id: 2, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.5, image: '/api/placeholder/200/250' },
    { id: 3, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.5, image: '/api/placeholder/200/250' },
    { id: 4, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.5, image: '/api/placeholder/200/250' }
  ],
  topSelling: [
    { id: 5, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.9, image: '/api/placeholder/200/250' },
    { id: 6, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.9, image: '/api/placeholder/200/250' },
    { id: 7, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.9, image: '/api/placeholder/200/250' },
    { id: 8, name: 'Gradient Graphic T-shirt', price: 30, rating: 4.9, image: '/api/placeholder/200/250' }
  ]
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <span className="text-white font-medium">SHOP.CO</span>
        </div>
      </div>
      <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
      <div className="flex items-center mb-2">
        <div className="flex items-center mr-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{product.rating}/5</span>
      </div>
      <div className="font-bold text-black">₹ {product.price}</div>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Arrivals */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">NEW ARRIVALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button className="text-gray-600 hover:text-black border border-gray-300 px-6 py-3 rounded-full hover:border-black transition-colors">
            View All
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Top Selling */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">TOP SELLING</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button className="text-gray-600 hover:text-black border border-gray-300 px-6 py-3 rounded-full hover:border-black transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  )
}
