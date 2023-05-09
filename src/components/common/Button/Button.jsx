import React from "react";

const Button = ({ children }) => {
  return (
    <div className="flex  justify-center my-5">
      <button className="w-[180px] h-[70px]  bg-orange-500 hover:bg-orange-700 rounded-md text-white text-xl font-semibold">
        {children}
      </button>
    </div>
  );
};

export default Button;
