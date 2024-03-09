import Logo from '../images/logo-vector.jpg'

const NavBarLeft = () => {
    return (
        <>
            <div className="mt-2 flex row-auto">
                <div className="mx-3 ">
                            <img src={Logo} className='w-10'/>
                </div> 
                    <a className="mx-3 border-b-4 border-indigo-600 hidden sm:inline-flex">Starts</a>
                    <a className="mx-3 hidden sm:inline-flex">Projects</a>
                    <a className="mx-3 hidden sm:inline-flex">Planning</a>
                    <a className="mx-3 hidden md:inline-flex">Teams</a>
                    <a className="mx-3 hidden md:inline-flex">Calendar</a>
            </div>
        </>
    );
}

export default NavBarLeft;