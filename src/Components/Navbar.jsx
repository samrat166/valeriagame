import React from "react";
import icon from "./icon.png";
const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col  items-left">
          <a className="flex title-font font-medium items-left text-gray-900 mb-4 md:mb-0">
            <h1 className="text-3xl ml-4 font-bold p-3 text-white">
              Valeria Gameworld
            </h1>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
