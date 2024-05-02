import { useState } from 'react';
import logo from '../logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import './index.css'

const Header=()=>{
    // Header Section
    const [menuActive,setMenu]=useState(false)
    const enableHamburger=()=>{
        setMenu(prev=>!prev)
        console.log("clicked")
    }
    const menuClass=menuActive?"enable-menu":""
    return (
        <nav className="navbar">
            <div className='nav-sec'>
            <img src={logo} className="company-logo" alt="company" />
            <ul className="nav-links">
                <li><a href="#" >Home</a></li>
                <li><a href="#" >Employee Directory</a></li>
                <li><a href="#" >Performance</a></li>
            </ul>
            <div className="search-bar-cont">
                <input type="text" placeholder="Search.."/>
                <FiSearch className="icon"/>
            </div>
            <RxHamburgerMenu onClick={enableHamburger} className='hamburger'/>
            </div>
            <ul className={`sm-menu ${menuClass}`}>
                <li><a href="#" >Home</a></li>
                <li><a href="#" >Employee Directory</a></li>
                <li><a href="#" >Performance</a></li>
            </ul>
        </nav>
    )
}

export default Header;