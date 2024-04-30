import { MdKeyboardArrowDown } from "react-icons/md";
import Avatar from "./Avatar";
import NavBarRight from "./NavbarRight";
import NavBarLeft from "./NavBarLeft";
import { useState } from "react";
import NavBarArrowDown from "./NavbarArrowDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="NavBar box-border p-5 flex justify-between overflow-hidden border-b border-gray-300">
        <div className="NavBar-left flex row-span-1 sm:dis">
          <NavBarLeft />
        </div>
        <div className="NavBar-right">
          <div className="flex row">
            <NavBarRight />
            <Avatar />
            <a className="mx-3 mt-2 " onClick={showMenu}>
              <MdKeyboardArrowDown size={25} />
              {isOpen && (
                <div className="absolute top-0 right-0 mt-16 mr-10 w-40 shadow-lg z-40 mx-5 rounded-lg  backdrop-blur-xl border border-zinc-500">
                  <NavBarArrowDown />
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
