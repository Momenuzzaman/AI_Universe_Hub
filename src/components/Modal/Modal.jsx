import React from "react";

const Modal = ({ tool }) => {
  const { name, image_link } = tool;
  console.log(tool);
  return (
    <div>
      <input type="checkbox" id="tool-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="tool-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <div className="hero w-full ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={image_link && image_link[0]}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
