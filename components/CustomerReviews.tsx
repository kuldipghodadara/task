"use client";

import { useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [1, 2, 3];

export default function CustomerReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const child = containerRef.current.children[index] as HTMLElement;
      if (child) {
        containerRef.current.scrollTo({
          left: child.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const nextSlide = useCallback(() => {
    currentIndex.current = (currentIndex.current + 1) % reviews.length;
    scrollToIndex(currentIndex.current);
  }, []);

  const prevSlide = () => {
    currentIndex.current =
      (currentIndex.current - 1 + reviews.length) % reviews.length;
    scrollToIndex(currentIndex.current);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='text-3xl sm:text-4xl text-black text-center mb-12 font-["Bowlby_One_SC",sans-serif] font-black'>
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-hidden gap-6 pb-4 scroll-smooth"
          >
            {reviews.map((i) => (
              <div
                key={i}
                className="bg-[#f0eeed] border border-gray-200 rounded-tl-[65px] rounded-br-[65px] shadow-md p-6 min-w-full text-center"
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  Our experience with this service has been exceptional. The
                  platform provided us with a seamless hiring process, from
                  posting job openings to finding the perfect candidates. The
                  user-friendly interface made it easy for our team to
                  collaborate, review applications, and schedule interviews.
                </p>
                <h4 className="font-semibold text-black mt-2">John Smith</h4>
                <h4 className="font-normal text-[#66707D] text-sm mt-2">
                  Senior HR Manager at Zendesk
                </h4>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
