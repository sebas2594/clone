import { useState } from "react";
import Logo from "../images/logo-vector.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import LateralNavbar from "./LateralNavbar";

const NavBarLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleItem = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="mt-2 flex row-auto">
        <div className="mx-3 ">
          <img src={Logo} className="w-10" size={25} />
        </div>
        <div
          className="mx-1 sm:hidden flex justify-center align-middle py-1"
          onClick={showMenu}
        >
          <RxHamburgerMenu size={25} />
          {isOpen && (
            <div className="flex-col z-50">
              <div
                className="fixed top-0 left-0 bg-white w-3/4 h-full border border-zinc-500"
                onClick={handleItem}
              >
                <LateralNavbar />
              </div>
              <div className="fixed top-0 right-0 bg-blue-500-500 w-1/4 h-full backdrop-blur-xl"></div>
            </div>
          )}
        </div>
        <a className="mx-3 border-b-4 border-indigo-600 hidden sm:inline-flex">
          Starts
        </a>
        <a className="mx-3 hidden sm:inline-flex">Projects</a>
        <a className="mx-3 hidden sm:inline-flex">Planning</a>
        <a className="mx-3 hidden md:inline-flex">Teams</a>
        <a className="mx-3 hidden md:inline-flex">Calendar</a>
      </div>
    </>
  );
};

export default NavBarLeft;
