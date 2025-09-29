"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='text-3xl sm:text-4xl  text-black text-center mb-12 font-["Bowlby_One_SC",sans-serif] font-black'>
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-6 min-w-[300px] flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">★★★★★</div>
                </div>
                <h4 className="font-semibold text-black mb-2">John Smith</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our experience with this service has been exceptional. The
                  platform provided us with a seamless hiring process, from
                  posting job openings to finding the perfect candidates. The
                  user-friendly interface made it easy for our team to
                  collaborate, review applications, and schedule interviews.
                </p>
              </div>
            ))}
          </div>

          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
