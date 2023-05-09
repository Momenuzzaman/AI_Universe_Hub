import React from "react";

const AiTool = ({ tool }) => {
  const { image, name, features, published_in } = tool;
  console.log(tool);
  return (
    <div>
      <div className=":w-3/6 md:w-10/12 p-2 rounded-md shadow-md  dark:text-gray-50 mx-auto">
        <img
          src={image}
          alt="ai-img"
          className=" w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2 border-b-4 border-indigo-500 pb-10">
          <span className="block font-semibold text-xl tracking-widest uppercase dark:text-violet-400">
            Features
          </span>
          {features &&
            features?.map((feature, i) =>
              feature ? (
                <h2 key={i + 1} className=" text-black">
                  {i + 1} {feature}
                </h2>
              ) : (
                ""
              )
            )}
        </div>
        <div className="text-black">
          <div>
            <p className="font-bold text-xl">{name}</p>
            <p>{published_in}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTool;
