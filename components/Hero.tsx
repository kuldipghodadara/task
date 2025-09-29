"use client";

export default function Hero() {
  return (
    <section
      className="bg-[#f2f0f1] flex flex-row items-center justify-center w-full box-border max-
"
    >
      <div
        className="box-border py-26 gap-12 flex flex-col items-start justify-center max-[768px]:py-10
"
      >
        <div className="gap-8 flex flex-col items-start justify-start max-[764px]:items-center">
          <div
            className='box-border text-black text-[64px] leading-[64px]  relative max-w-[577px] 
             max-[764px]:text-4xl max-[764px]:leading-9 max-[764px]:text-center 
              font-["Bowlby_One_SC",sans-serif] font-black'
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
            <div className="hidden min-[990px]:block absolute top-[-42px] right-[-110px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div className="hidden min-[990px]:block absolute bottom-[-75px] left-[-90px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 104 104"
                fill="none"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="box-border text-center
text-[rgb(0_0_0_/_60%)] text-base font-normal  max-w-[595px]"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </div>
          <div
            className="px-[54px] py-4 cursor-pointer text-base font-medium border rounded-[62px] bg-black text-white 
              max-[764px]:mx-auto max-[764px]:block max-[475]:w-full text-center
          "
          >
            Shop Now
          </div>
        </div>
        <div className="flex gap-4 max-[768px]:flex-wrap max-[768px]:w-full max-[768px]:justify-center">
          <div className="text-center">
            <h3 className="text-[40px] font-bold text-black mb-2 max-[764px]:text-2xl">
              200+
            </h3>
            <p className="max-[990px]:text-xs text-gray-600">
              International Brands
            </p>
          </div>

          <div className="text-center border-l-2 border-[rgb(0 0 0 / 10%)] pl-4">
            <h3 className="text-[40px] font-bold text-black mb-2 max-[764px]:text-2xl">
              2000+
            </h3>
            <p className="max-[990px]:text-xs text-gray-600">
              High-Quality Products
            </p>
          </div>
          <div className="text-center border-l-2 border-[rgb(0 0 0 / 10%)] pl-4">
            <h3 className="text-[40px] font-bold text-black mb-2 max-[764px]:text-2xl">
              30,000+
            </h3>
            <p className="max-[990px]:text-xs text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
