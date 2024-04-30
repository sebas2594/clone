import { MdOutlineFullscreen, MdOutlineFilterAlt } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import SubMenuOptionsMinimized from "./SubMenuOptionsMinimized";

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="NavBar box-border p-5 px-8 flex justify-between overflow-hidden border-b border-gray-300 ">
      <div className="mt-2 text-xl font-medium lg:py-2">
        <a className="mx-3 border-b-4 border-indigo-600 hidden lg:inline-flex">
          Overview
        </a>
        <a className="mx-3 hidden lg:inline-flex">Tasks</a>
        <a className="mx-3 hidden lg:inline-flex">Milestones</a>
        <a className="mx-3 hidden lg:inline-flex">Messages</a>
        <a className="mx-3 hidden lg:inline-flex">Files</a>
        <a className="mx-3 hidden lg:inline-flex">Time</a>
        <a className="mx-3 hidden lg:inline-flex">Comments</a>
        <div className="flex  p-2 lg:hidden" onClick={showMenu}>
          <a>Options</a>
          <a className="mt-1 text-indigo-600">
            <IoIosArrowDown size={25} />
            {isOpen && (
              <div className="absolute left-0 ml-10 mt-2 z-40 w-40 shadow-lg rounded-lg backdrop-blur-xl border border-zinc-500 text-black">
                <SubMenuOptionsMinimized />
              </div>
            )}
          </a>
        </div>
      </div>
      <div className="flex row-span-2">
        <button className="border-2 p-2 text-gray-500 capitalize rounded-lg font-bold hover:bg-gray-700 hover:text-white mt-2 flex row mx-2">
          <MdOutlineFullscreen size={25} />
          <p className="hidden lg:inline-flex">Full Screems</p>
        </button>
        <button className="border-2 p-2 text-gray-500 capitalize rounded-lg font-bold hover:bg-gray-700 hover:text-white mt-2 flex row">
          <MdOutlineFilterAlt size={25} />
          <p className="hidden lg:inline-flex">Filters</p>
        </button>
      </div>
    </div>
  );
};
export default SubNavbar;
