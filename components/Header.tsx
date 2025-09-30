"use client";

import { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`w-full sticky top-0 z-50 left-0 transition-all duration-300 ${
        isMenuOpen ? "bg-[#cdcdcd] h-screen" : "bg-white py-6"
      } px-2.5`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            {!isMenuOpen && (
              <h1 className='text-2xl IntegralCF  text-black font-["Bowlby_One_SC",sans-serif] font-black'>
                SHOP.CO
              </h1>
            )}
          </div>

          <nav className="hidden min-[990px]:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer ">
              <span>Shop</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <a href="#" className="text-gray-700 hover:text-black">
              On Sale
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              New Arrivals
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Brands
            </a>
          </nav>

          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative  rounded-full pl-10 pr-3 py-3 bg-[#f0f0f0]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full text-black bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {!isMenuOpen && (
              <>
                <button className="text-black relative">
                  <ShoppingCart className="h-5 w-5" />
                </button>
                <button className="text-black relative">
                  <User className="h-5 w-5" />
                </button>
              </>
            )}
            <button
              className="min-[990px]:hidden text-gray-600 hover:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="min-[990px]:hidden  py-4 animate-in fade-in slide-in-from-right-2 w-full">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
                <span>Shop</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <a href="#" className="text-gray-700 hover:text-black">
                On Sale
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                New Arrivals
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Brands
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
