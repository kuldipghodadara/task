import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-40 pb-12 relative z-0 flex items-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-[50%] flex flex-col md:flex-row max-[768]:items-start max-[768]:w-full max-[768]:p-6 items-center md:items-start justify-between gap-12">
        {/* Left Section */}
        <div className="text-center md:text-left  max-[768]:text-start">
          <h3 className='text-3xl  text-black mb-4 font-["Bowlby_One_SC",sans-serif] font-black'>
            SHOP.CO
          </h3>
          <p className="text-[#00000099]  text-sm font-normal leading-[22px] mb-6 max-w-[250px]">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 max-[768]:justify-start">
            <a
              href="#"
              className="w-8 h-8 text-black rounded-full flex items-center justify-center"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="w-8 h-8 text-black rounded-full flex items-center justify-center"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left max-[768]:text-start">
          <h4 className="font-medium text-black mb-4">HELP</h4>
          <ul className="space-y-2 text-gray-600 text-base">
            <li>
              <a href="#" className="hover:text-black ">
                Privacy statement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
