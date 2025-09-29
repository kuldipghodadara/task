// 'use client'

// import { useState } from 'react'
// import { Search, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react'

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="w-full bg-white sticky top-0 z-50 py-6 px-2.5 left-0">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16 ">
//           {/* Logo */}
//           <div className="flex items-center">
//             <h1 className="text-2xl IntegralCF font-bold text-black">SHOP.CO</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
//               <span>Shop</span>
//               <ChevronDown className="h-4 w-4" />
//             </div>
//             <a href="#" className="text-gray-700 hover:text-black">
//               On Sale
//             </a>
//             <a href="#" className="text-gray-700 hover:text-black">
//               New Arrivals
//             </a>
//             <a href="#" className="text-gray-700 hover:text-black">
//               Brands
//             </a>
//           </nav>

//           {/* Search Bar - Hidden on mobile */}
//           <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
//             <div className="relative w-fit rounded-4xl pl-10 pr-3 py-3 bg-zinc-100">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="w-full
//  focus:outline-none  "
//               />
//             </div>
//           </div>

//           {/* Right Icons */}
//           <div className="flex items-center space-x-4">
//             {/* Search button for small screens */}
//             <button className="lg:hidden text-gray-600 hover:text-black">
//               <Search className="h-5 w-5" />
//             </button>
//             <button className="text-gray-600 hover:text-black relative">
//               <ShoppingCart className="h-5 w-5" />

//             </button>
//             <button className="text-gray-600 hover:text-black">
//               <User className="h-5 w-5" />
//             </button>
//             {/* Mobile menu toggle */}
//             <button
//               className="md:hidden text-gray-600 hover:text-black"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 py-4 animate-in fade-in slide-in-from-top-2">
//             <nav className="flex flex-col space-y-4">
//               <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
//                 <span>Shop</span>
//                 <ChevronDown className="h-4 w-4" />
//               </div>
//               <a href="#" className="text-gray-700 hover:text-black">
//                 On Sale
//               </a>
//               <a href="#" className="text-gray-700 hover:text-black">
//                 New Arrivals
//               </a>
//               <a href="#" className="text-gray-700 hover:text-black">
//                 Brands
//               </a>

//               {/* Mobile Search */}
//               <div className="pt-4">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
//                   <input
//                     type="text"
//                     placeholder="Search for products..."
//                     className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
//                   />
//                 </div>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header

"use client";

import { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 py-6 px-2.5 left-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="flex items-center">
            {!isMenuOpen && (
              <h1 className='text-2xl IntegralCF  text-black font-["Bowlby_One_SC",sans-serif] font-black'>
                SHOP.CO
              </h1>
            )}
          </div>

          {/* Desktop Navigation */}
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

          {/* Search Bar - Hidden below lg */}
          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full rounded-full pl-10 pr-3 py-3 bg-zinc-100">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* <button className="text-gray-600 hover:text-black relative">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-black">
              <User className="h-5 w-5" />
            </button> */}

            {!isMenuOpen && (
              <>
                <button className="text-gray-600 hover:text-black relative">
                  <ShoppingCart className="h-5 w-5" />
                </button>
                <button className="text-gray-600 hover:text-black">
                  <User className="h-5 w-5" />
                </button>
              </>
            )}
            {/* Mobile menu toggle */}
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

        {/* Mobile Navigation */}
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

              {/* Mobile Search */}
              {/*   <div className="pt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
