import React from "react";

export const Hero = (props: {}) => {
  return (
    <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 ">
      <div className="flex flex-col justify-center items-start gap-5">
        <h2 className="text-4xl font-bold"> Print Store</h2>

        <h2 className=" font-semibold text-gray-700"> Print Store</h2>
        <div className="p-5  flex flex-col gap-3">
          <h2>Upload your files</h2>
        </div>
      </div>

      <div>Image</div>
    </div>
  );
};
