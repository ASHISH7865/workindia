import React from 'react'
import "./style.css"
function Header() {
    return (
        <div>
        <nav>
	    <div className="logo">Work<strong>India</strong></div>
	    <ul className="links">
		<li><a href="#home">Home</a></li>
		<li><a href="#Recharge">Recharge</a></li>
		<li><a href="#PostJob">PostJob</a></li>
		<li><a href="#Help">Help</a></li>
		<li className="active"><a href="#Profile">Profile</a></li>
	    </ul>
	    
        </nav>
        </div>
    
    )
}

export default Header
