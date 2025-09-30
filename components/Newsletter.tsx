import { Mail } from "lucide-react";
export default function Newsletter() {
  return (
    <section className="relative z-10 -mb-20 ">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[20px] py-12 px-6 sm:px-13.5 sm:py-12 shadow-lg flex items-center justify-evenly max-[768]:flex max-[768]:flex-col max-[768]:gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left text-wrap">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className=" mx-auto space-y-4 flex flex-col justify-center  max-[768]:w-full max-[768]:text-sm">
            <div className="relative ">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Mail />
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-12 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white bg-white w-full max-[768]:text-sm"
              />
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors max-[1003]:px-0 max-[768]:text-sm">
              Send Us For Notification
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
