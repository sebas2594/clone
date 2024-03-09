

import { MdKeyboardArrowDown } from "react-icons/md";
import Avatar from './Avatar';
import NavBarRight from './NavbarRight';
import NavBarLeft from './NavBarLeft';

const Navbar = () => {
    return(
        <>
            <div className="NavBar box-border p-5 flex justify-between overflow-hidden border-b border-gray-300">
                <div className="NavBar-left flex row-span-1 sm:dis">                                                      
                    <NavBarLeft/>
                </div>
                <div className="NavBar-right">
                    <div className='flex row'>
                        <NavBarRight/>                    
                        <Avatar/>                    
                        <a className="mx-3 mt-2">
                            <MdKeyboardArrowDown size={25}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;