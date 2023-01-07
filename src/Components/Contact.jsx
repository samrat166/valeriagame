import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contaner-fluid mt-10 font-bold text-2xl">
        <h1>You can contact us here</h1>
        <div className="links flex flex-column">
          <a
            href="https://www.facebook.com/Gameworld2020"
            className="font-none text-xs p-1"
          >
            <button class="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Click here to visit our facebook
            </button>
          </a>
          <h2 href="#" className="font-none text-xs p-1">
            (830)  219-4796
          </h2>
          <h1 href="#" className="font-none text-xs p-1">
            valeriagame19@gmail.com
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
