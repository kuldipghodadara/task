'use client'

export default function Hero() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute top-0 right-1/4 text-6xl">✦</div>
            <div className="absolute bottom-0 left-1/4 text-4xl">✦</div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              FIND CLOTHES<br />
              THAT MATCHES<br />
              YOUR STYLE
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Browse through our diverse range of meticulously crafted garments, designed 
              to bring out your individuality and cater to your sense of style.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors mb-12">
              Shop Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2">200+</h3>
              <p className="text-gray-600">International Brands</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2">2,000+</h3>
              <p className="text-gray-600">High-Quality Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2">30,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}