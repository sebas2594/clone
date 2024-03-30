const NavBarArrowDown = () => {
    let menu = [
        {
            "name": "Profile",
            "enlace": ".."
        },
        {
            "name": "Config",
            "enlace": ".."
        },
        {
            "name": "Account",
            "enlace": ".."
        },
        {
            "name": "Help",
            "enlace": ".."
        },
        {
            "name": "Logout",
            "enlace": ".."
        }
    ];
   

    let options = [];


    for(let i=0; i<menu.length;i++){
        if(menu[i].name ==="Logout"){
            options.push(
                <hr className="h-px mx-4 my-2 bg-neutral-400 border-0"></hr>
            );
        }
        options.push(
            <a href="#" className="block py-1 px-2 font-medium hover:bg-neutral-300 ">{`${menu[i].name}`}</a>

        );           
    }
    
    return(options);

}
export default NavBarArrowDown;