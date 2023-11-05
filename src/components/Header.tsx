import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";


function Header(){
    return (
        // header section with logo and navigation links 
        <div className="header-sec">
        <Logo />
        <NavItem />
        </div>
    )
}
export default Header;