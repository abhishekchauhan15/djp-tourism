import React, {useState} from "react";
import './Navbar.css';
const Navbar= ()=>{
    const[navLinkopen,navLinkToggle] =useState(false);
    const renderClasses=()=>{
        let classes="navlinks";
        if(navLinkopen){
            classes += "  active";
        }
        return classes
    }      
    const handlenavLinksToggle=()=>{
        navLinkToggle(!navLinkopen);
    }
    return <nav>
        
        <div className="logo">
        <i className="fas fa-plane fa-spin"></i>
        <h4>DJP TOURISM</h4>
        </div>
        <ul className={renderClasses()}>
            <li><a className="link" href="#">Home</a></li>
            <li><a className="link" href="#">Explore</a></li>
            <li><a className="link" href="#">Discover</a></li>
            <li><a className="link" href="#">Map</a></li>
        </ul>
        <div onClick={handlenavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
        </div>
    </nav>
}
export default Navbar;