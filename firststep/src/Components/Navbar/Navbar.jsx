import * as React from "react";
import "./style/style.css"

function Navbar() {
    return(
        <div className="navbar">
            <div className="sub-nav">
                <div className="nav-item">
                    Encuesta
                </div>
            </div>
            <div className="sub-nav">
                <div className="nav-item">
                    ¿Necesitas ayuda?
                </div>
                <div className="nav-item">
                    Violentómetro
                </div>
            </div>
        </div>
    )
}

export default Navbar;
