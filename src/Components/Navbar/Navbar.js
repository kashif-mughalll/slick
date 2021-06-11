import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <button onClick={
                ()=> {
                    document.getElementById("side-bar-id1").style.left = '0';
                }
            } > <i className="fas fa-bars hover-class1" ></i> </button>
        </div>
    )
}

export default Navbar
