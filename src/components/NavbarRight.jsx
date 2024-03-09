import { PiMagnifyingGlassThin } from "react-icons/pi";
import { CiCirclePlus, CiFolderOn } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { GoBell } from "react-icons/go";

const NavBarRight = () => {
    return (
        <>
            <div className="mt-2  row-span-1 hidden sm:flex">
                <a className="mx-3 hidden sm:inline-flex">
                    <PiMagnifyingGlassThin size={25} />
                </a>
                <a className="mx-3 hidden sm:inline-flex">
                    <TbGridDots size={25} />
                </a>
                <a className="mx-3 md:inline-flex">
                    <CiCirclePlus size={25} />
                </a>
                <a className="mx-3 hidden md:inline-flex">
                    <CiFolderOn size={25} />
                </a>
                <a className="mx-3 hidden lg:inline-flex">
                    <GoBell size={25} />
                </a>
            </div>
        </>
    );
}
export default NavBarRight;