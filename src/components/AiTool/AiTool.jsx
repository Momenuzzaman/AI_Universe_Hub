import React from "react";

const AiTool = ({ tool, handleOpenModal }) => {
  const { id, image, name, features, published_in } = tool;
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
          <p className="font-bold text-xl">{name}</p>
          <div className="flex justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>{" "}
              <p> {published_in}</p>
            </div>
            {/* modal open button */}
            <button onClick={() => handleOpenModal(id)}>
              <label htmlFor="tool-modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 bg-orange-200 rounded-full cursor-pointer hover:bg-orange-400 hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTool;
