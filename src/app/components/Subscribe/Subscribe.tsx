import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-[#f7d1a6] dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="flex flex-col space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>

          {/* Input Section */}
          <div className="flex justify-center sm:justify-start">
            <input
              data-aos="fade-up"
              type="email" // Email type for better input validation
              placeholder="Enter your email"
              className="bg-gray-100 px-4 py-2 outline-none text-sm w-full sm:w-[250px] lg:w-[300px] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
