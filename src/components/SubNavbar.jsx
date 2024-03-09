import { MdOutlineFullscreen, MdOutlineFilterAlt  } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const SubNavbar = () =>{
    return(
        <div className="NavBar box-border p-5 px-8 flex justify-between overflow-hidden border-b border-gray-300 ">
            <div className="mt-2 text-xl font-medium ">                
                <a className="mx-3 border-b-4 border-indigo-600 hidden sm:inline-flex">Overview</a>
                <a className="mx-3 hidden sm:inline-flex">Tasks</a>
                <a className="mx-3 hidden sm:inline-flex">Milestones</a>
                <a className="mx-3 hidden md:inline-flex">Messages</a>
                <a className="mx-3 hidden md:inline-flex">Files</a>
                <a className="mx-3 hidden lg:inline-flex">Time</a>
                <a className="mx-3 hidden lg:inline-flex">Comments</a>
                <a className="mx-3 align-middle inline-flex lg:hidden"><GiHamburgerMenu/></a>
            </div>
            <div className="flex row-span-2">
                <button className="border-2 p-2 text-gray-500 capitalize rounded-lg font-bold hover:bg-gray-700 hover:text-white mx-2 flex row">
                    <MdOutlineFullscreen size={25}/>
                    <p className="hidden lg:inline-flex">Full Screems</p>
                </button>
                <button className="border-2 p-2 text-gray-500 capitalize rounded-lg font-bold hover:bg-gray-700 hover:text-white mx-2 flex row">
                    <MdOutlineFilterAlt size={25}/>
                    <p className="hidden lg:inline-flex">Filters</p>
                </button>
            </div>
        </div>
    );
}
export default SubNavbar;