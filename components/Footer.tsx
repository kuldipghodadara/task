// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-32 pb-12 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">SHOP.CO</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                {/* Social Icon Placeholder */}
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                {/* Social Icon Placeholder */}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="font-semibold text-black mb-4">HELP</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black">Privacy statement</a></li>
              <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
