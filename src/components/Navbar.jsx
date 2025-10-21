import React from "react";

function Navbar() {
  return (
    <nav className="mb-10 w-full shrink-0 px-0 py-4 ">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
        <strong className="text-3xl sm:text-4xl font-bold lg:mr-160 ">
          Portfolio
        </strong>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-end gap-4 sm:gap-7 ">
          <a
            href="#about"
            className="font-bold! border-b-2 border-transparent text-white! hover:border-white transition duration-300 px-1  rounded-md pb-1 "
          >
            About
          </a>
          <a
            href="#skills"
            className="font-bold! text-white! border-b-2 border-transparent hover:border-white transition duration-300 px-1 rounded-md pb-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="font-bold! text-white! border-b-2 border-transparent hover:border-white transition duration-300 px-1 rounded-md pb-1"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="font-bold! text-white! border-b-2 border-transparent hover:border-white transition duration-300 px-1 rounded-md pb-1"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
