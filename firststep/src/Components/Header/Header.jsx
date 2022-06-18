import * as React from "react";
import img from "../../IMG/LogoFS.png"
import Navbar from "../Navbar/Navbar"
import './style/style.css'

function Header() {
    return(
        <div className="main">
            <Navbar/>
            <img src={img} height="200px" width="auto" alt="logo.png"/>
            <h1>Estás dando el primer paso... el más importante</h1>
        </div>
    )
}

export default Header;