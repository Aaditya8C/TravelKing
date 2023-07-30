import React from "react";

const Button = ({ children }) => {
  return (
    <button className="md:px-8 px-4 py-3 mt-4 z-50 font-bold uppercase text-white rounded-full gradient-transition flex flex-row  m-auto justify-center items-center">
      {children}
      <div className="flex gap-1 justify-center items-center">
        <span className="bg-white rounded-full inline-block ml-2 w-[6px] h-[6px]" />
        <span className="bg-white rounded-full  opacity-50 inline-block w-[6px] h-[6px]" />
        <span className="bg-white rounded-full  opacity-20 inline-block w-[6px] h-[6px]" />
      </div>
    </button>
  );
};

export default Button;
