import React from "react";

const Modal = ({ tool }) => {
  const {
    image_link,
    description,
    integrations,
    features,
    pricing,
    input_output_examples,
  } = tool;
  console.log(tool);
  return (
    <div>
      <input type="checkbox" id="tool-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  max-w-5xl relative">
          <label
            htmlFor="tool-modal"
            className="btn btn-sm btn-circle absolute right-0 top-0 "
          >
            ✕
          </label>
          <div>
            <div className=" ">
              <div className=" lg:hero-content flex-col lg:flex-row-reverse">
                <div>
                  <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={image_link && image_link[0]}
                        className="rounded-lg shadow-2xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h1 className="text-center text-xl font-semibold mt-5">
                        {input_output_examples &&
                          input_output_examples[0].input}
                      </h1>
                      <p className="text-center  mt-5">
                        {input_output_examples &&
                          input_output_examples[0].output}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card bg-orange-100 shadow-xl mt-2">
                  <div className="card-body">
                    <h2 className="card-title">{description}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {pricing &&
                        pricing?.map((price, i) => (
                          <div
                            key={i + 1}
                            className="bg-white text-center md:h-28 border-2 rounded-md"
                          >
                            <p className="text-center md:mt-6 font-semibold text-orange-400">
                              {price?.plan ? price?.plan : ""}
                            </p>
                            <p>{price?.price ? price?.price : ""}</p>
                          </div>
                        ))}
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-xl font-bold">Features</h1>
                        {Object.values(features || {})?.map((value, i) => (
                          <p key={i + 1}>
                            {i + 1}{" "}
                            {value?.feature_name
                              ? value?.feature_name
                              : "Not Found"}
                          </p>
                        ))}
                      </div>
                      <div>
                        <h1 className="text-xl font-bold">Integrations</h1>
                        {integrations &&
                          integrations?.map((integration, i) => (
                            <p key={i + 1}>
                              {i + 1} {integration ? integration : "not found"}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
